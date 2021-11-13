import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService, User} from '../../services/login.service';

declare var $:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{

    public isloginfail: boolean = false;

    private _loginfrm: FormGroup;

    focus;
    focus1;
    focus2;
    test : Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;

    constructor(private element : ElementRef, private router: Router, public loginServ: LoginService) {

        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;

        this._loginfrm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            userpassword: new FormControl('', [Validators.required]),
        });

    }

    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    ngOnInit(){
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)

        this.loginServ.getCurrentUser.subscribe(
            user => {
                if(user.Role === 'admin') {
                this.router.navigate(['checkinout'])
                }
            }
        );  
    }

    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }

    sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];

        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);

            body.classList.add('nav-open');
            this.sidebarVisible = true;

        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }

    get loginfrm() {
        return this._loginfrm;
    }

    login() {
        if(this.loginfrm.valid) {
            this.loginServ.login(this.loginfrm.value).subscribe(
                user => {

                    localStorage.setItem('currentUser', JSON.stringify(user));

                    switch(user.Role) {

                    case "admin":
                        this.router.navigate(['checkinout']);
                        break;
                    
                    case "teacher":
                        this.router.navigate(['checkin_teacher/checkin_subject']);
                        break;

                    case "student":
                        this.router.navigate(['student/checkinout']);
                        break;
                    
                    case "user":
                        this.router.navigate(['/user']);
                        break;
                    
                    default:
                        this.isloginfail = true;

                }

            });
        }
    }

}
