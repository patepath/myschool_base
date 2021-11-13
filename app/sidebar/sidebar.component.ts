import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Student } from 'app/school';

import { UserRoutes } from 'app/userpage/user.routing';
import { LoginService } from '../services/login.service';
import { User } from '../services/user.service';
import { StudentService } from '../services/student.service';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
/*
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    }, 
    {
        path: '/components',
        title: 'Components',
        type: 'sub',
        collapse: 'components',
        icontype: 'nc-icon nc-layout-11',
        children: [
            {path: 'buttons', title: 'Buttons', ab:'B'},
            {path: 'grid', title: 'Grid System', ab:'GS'},
            {path: 'panels', title: 'Panels', ab:'P'},
            {path: 'sweet-alert', title: 'Sweet Alert', ab:'SA'},
            {path: 'notifications', title: 'Notifications', ab:'N'},
            {path: 'icons', title: 'Icons', ab:'I'},
            {path: 'typography', title: 'Typography', ab:'T'}
        ]
    }, 
*/
    {
        path: '/checkinout',
        title: 'การเข้า-ออก',
        type: 'sub',
        collapse: 'checkinout',
        icontype: 'nc-icon nc-camera-compact',
        children: [
            {path: 'student', title: 'การเข้า-ออก นักเรียน', ab: '1'},
//            {path: 'employee', title: 'การเข้า-ออก บุคคลากร', ab: '2'},
        ]
    }, {
        path: 'reports',
        title: 'รายงาน',
        type: 'sub',
        collapse: 'report',
        icontype: 'nc-icon nc-paper',
        children: [
            {path: 'report1', title: 'สรุปคะแนนพฤติกรรม', ab: '1'},
            {path: 'report2', title: 'ขาด ลา มาสาย', ab: '2'},
            {path: 'report3', title: 'สรุปการมาเรียนประจำวัน', ab: '3'},
            {path: 'report4', title: 'การเช็คข้อมูลจากครูที่ปรึกษา', ab: '4'},
            {path: 'report5', title: 'สรุปข้อมูลการมาเรียนของนักเรียน', ab: '5'},
        ]
    }, {
        path: 'sdq',
        title: 'แบบประเมิน',
        type: 'sub',
        collapse: 'sdq',
        icontype: 'nc-icon nc-bullet-list-67',
        children: [
            {path: 'sdq1', title: 'สำหรับครูประเมิน', ab: '1'},
        ]
    }, {
        path: 'setting',
        title: 'ข้อมูลพื้นฐาน 123',
        type: 'sub',
        collapse: 'setting',
        icontype: 'nc-icon nc-settings-gear-65',
        children: [
            {path: 'user', title: 'ผู้ใช้งาน', ab: '1'},
            {path: 'studentinfo', title: 'นักเรียน', ab: '2'},
            //{path: 'parent', title: 'ผู้ปกครอง', ab: '3'},
            {path: 'teacher', title: 'อาจารย์', ab: '3'},
            {path: 'grade', title: 'ชั้นเรียน', ab: '4'},
            {path: 'room', title: 'ห้องเรียน', ab: '5'},
            {path: 'behavior', title: 'พฤติกรรม', ab: '6'},
            {path: 'checkinprofile', title: 'เวลาเข้าเรียน', ab: '7'},
        ]
    }, 

/*
    {
        path: '/forms',
        title: 'Forms',
        type: 'sub',
        collapse: 'forms',
        icontype: 'nc-icon nc-ruler-pencil',
        children: [
            {path: 'regular', title: 'Regular Forms', ab:'RF'},
            {path: 'extended', title: 'Extended Forms', ab:'EF'},
            {path: 'validation', title: 'Validation Forms', ab:'VF'},
            {path: 'wizard', title: 'Wizard', ab:'W'}
        ]
    },{
        path: '/tables',
        title: 'Tables',
        type: 'sub',
        collapse: 'tables',
        icontype: 'nc-icon nc-single-copy-04',
        children: [
            {path: 'regular', title: 'Regular Tables', ab:'RT'},
            {path: 'extended', title: 'Extended Tables', ab:'ET'},
            {path: 'datatables.net', title: 'Datatables.net', ab:'DT'}
        ]
    },{
        path: '/maps',
        title: 'Maps',
        type: 'sub',
        collapse: 'maps',
        icontype: 'nc-icon nc-pin-3',
        children: [
            {path: 'google', title: 'Google Maps', ab:'GM'},
            {path: 'fullscreen', title: 'Full Screen Map', ab:'FSM'},
            {path: 'vector', title: 'Vector Map', ab:'VM'}
        ]
    },{
        path: '/widgets',
        title: 'Widgets',
        type: 'link',
        icontype: 'nc-icon nc-box'

    },{
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'nc-icon nc-chart-bar-32'

    }, {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'nc-icon nc-calendar-60'
    }, {
        path: '/pages',
        title: 'Pages',
        collapse: 'pages',
        type: 'sub',
        icontype: 'nc-icon nc-book-bookmark',
        children: [
            {path: 'timeline', title: 'Timeline Page', ab:'T'},
            {path: 'user', title: 'User Page', ab:'UP'},
            {path: 'login', title: 'Login Page', ab:'LP'},
            {path: 'register', title: 'Register Page', ab:'RP'},
            {path: 'lock', title: 'Lock Screen Page', ab:'LSP'}
        ]
    }
*/
];

export const ADMIN_ROUTES = [
    {
        path: '/checkinout',
        title: 'การเข้า-ออก',
        type: 'sub',
        collapse: 'checkinout',
        icontype: 'nc-icon nc-camera-compact',
        children: [
            {path: 'cam_student', title: 'การเข้า-ออก นักเรียน', ab: '1'},
            {path: 'checkin_subject', title: 'เช็คชื่อรายคาบ', ab: '2'},
            {path: 'checkinreport', title: 'รายงานเช็คชื่อรายคาบ', ab: '3'},
        ]
    }, {
        path: 'reports',
        title: 'รายงาน',
        type: 'sub',
        collapse: 'report',
        icontype: 'nc-icon nc-paper',
        children: [
            {path: 'report1', title: 'สรุปคะแนนพฤติกรรม', ab: '1'},
            {path: 'report2', title: 'ขาด ลา มาสาย', ab: '2'},
            {path: 'report3', title: 'สรุปการมาเรียนประจำวัน', ab: '3'},
            {path: 'report4', title: 'การเช็คข้อมูลจากครูที่ปรึกษา', ab: '4'},
            {path: 'report5', title: 'สรุปข้อมูลการมาเรียนของนักเรียน', ab: '5'},
        ]
    }, {
        path: 'sdq',
        title: 'แบบประเมิน',
        type: 'sub',
        collapse: 'sdq',
        icontype: 'nc-icon nc-bullet-list-67',
        children: [
            {path: 'sdq1', title: 'สำหรับครูประเมิน', ab: '1'},
            {path: 'sdq2', title: 'สำหรับผู้ปกครองประเมิน', ab: '2'},
            {path: 'sdq3', title: 'สำหรับนักเรียนประเมิน', ab: '3'},
        ]
    }, {
        path: 'admin',
        title: 'เครื่องมือ',
        type: 'sub',
        collapse: 'admin',
        icontype: 'nc-icon nc-settings',
        children: [
            {path: 'mgr-checkinsubject', title: 'การเช็คชื่อ', ab: '1'},
        ]
    },{
        path: 'setting',
        title: 'ข้อมูลพื้นฐาน',
        type: 'sub',
        collapse: 'setting',
        icontype: 'nc-icon nc-settings-gear-65',
        children: [
            {path: 'user', title: 'ผู้ใช้งาน', ab: '1'},
            {path: 'studentinfo', title: 'นักเรียน', ab: '2'},
            {path: 'parent', title: 'ผู้ปกครอง', ab: '3'},
            {path: 'teacher', title: 'อาจารย์', ab: '4'},
            {path: 'dept', title: 'แผนก', ab: '5'},
            {path: 'grade', title: 'ชั้นเรียน', ab: '6'},
            {path: 'room', title: 'ห้องเรียน', ab: '7'},
            {path: 'subjectgroup', title: 'หมวดวิชา', ab: '8'},
            {path: 'subject', title: 'วิชา', ab: '9'},
            {path: 'subjectstudent', title: 'ทะเบียนเรียนวิชา', ab: '10'},
            {path: 'behavior', title: 'พฤติกรรม', ab: '11'},
            {path: 'checkinprofile', title: 'เวลาเข้าเรียน', ab: '12'},
        ]
    }, 
];

export const TEACHER_ROUTES = [
    {
        path: 'checkin_teacher',
        title: 'การเข้า-ออก',
        type: 'sub',
        collapse: 'checkin_teacher',
        icontype: 'nc-icon nc-camera-compact',
        children: [
            { path: 'cam_student', title: 'การเข้า-ออก นักเรียน', ab: '1' },
            { path: 'checkin_subject', title: 'เช็คชื่อรายคาบ', ab: '2' },
        ]

    }, {
        path: 'report_teacher',
        title: 'รายงานสำหรับครู',
        type: 'sub',
        collapse: 'report_teacher',
        icontype: 'nc-icon nc-paper',
        children: [
            { path: 'checkin_report', title: 'รายการเช็คชื่อตามห้อง', ab: '1' },
        ]
    } 
];

export const STUDENT_ROUTES = [
    {
        path: 'student/checkinout',
        title: 'การเข้า-ออก',
        type: 'link',
        icontype: 'nc-icon nc-camera-compact',
    }, { 
        path: 'checkinout/checkinreport',
        title: 'การเช็คชื่อ',
        type: 'link',
        icontype: 'nc-icon nc-ruler-pencil',
    }, { 
        path: 'student/questionaire',
        title: 'แบบประเมิน',
        type: 'link',
        icontype: 'nc-icon nc-bullet-list-67',
    },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit  {

    public faceImg: string = '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'; 
    public menuItems: any[];
    public user: User;
    public student: Student;
   

    constructor(
        public loginServ: LoginService,
        public _sanitizer: DomSanitizer,
        public studentServ: StudentService
    ) {}

    isNotMobileMenu(){
        if( window.outerWidth > 991){
            return false;
        }

        return true;
    }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
        
        switch(this.user.Role) {

            case "admin":
                this.menuItems = ADMIN_ROUTES.filter(menuItem => menuItem);
                break;
            
            case "teacher":
                this.menuItems = TEACHER_ROUTES.filter(menuItem => menuItem);
                //this.menuItems = TEACHER_ROUTES;
                break;

            case "student":
                //this.menuItems = STUDENT_ROUTES.filter(menuItem => menuItem);
                this.menuItems = STUDENT_ROUTES;
               // this.studentServ.getFaceImgByCode(this.user.Name).subscribe( img => {

               //     if(img != '') {
               //         this.faceImg = img;
               //     }
               // });

                break;
        }
    }

    ngAfterViewInit(){
    }

    logout() {
        this.loginServ.logut();
    }

	getpic(img: string): string{
		if(img === '') {
			img = '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'; 
		}
		return img;
	}
}
