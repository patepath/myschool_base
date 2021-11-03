import { Component, OnInit, Type } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import { Opt } from '../school';
import { ConfigService } from '../services/config.service';
import { StudentRegister } from '../school';
import { StudentRegisterService } from '../services/student-register.service';
import { Alignment, Decoration, PageBreak } from 'pdfmake/interfaces';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css']
})
export class StudentRegisterFormComponent implements OnInit {

  public files!: FileList;
  public filestring: string = "";
  public blankpic: string = "";

  public provinceNames: string[] = [];

  public provinces: Opt[] = [];
  public studentProvince: Opt = { Value: 0, Name: ""};
  public oldschoolProvince: Opt = { Value: 0, Name: ""};

  public parentDefault: string = "";
  public parentCheck1: boolean = false;
  public parentCheck2: boolean = false;
  public parentCheck3: boolean = false;

  public parent1Province: Opt = { Value: 0, Name: ""};
  public parent1PresentProvince: Opt = { Value: 0, Name: ""};
  public parent2Province: Opt = { Value: 0, Name: ""};
  public parent2PresentProvince: Opt = { Value: 0, Name: ""};
  public parent3PresentProvince: Opt = { Value: 0, Name: ""};
  
  public educations: Opt[] = [];
  public parent1Education: Opt = { Value: 0, Name: ""};
  public parent2Education: Opt = { Value: 0, Name: ""};
  public parent3Education: Opt = { Value: 0, Name: ""};

  public religions: Opt[] = [];
  public studentReligion: Opt = { Value: 0, Name: ""};
  public parent1Religion: Opt = { Value: 0, Name: ""};
  public parent2Religion: Opt = { Value: 0, Name: ""};

  public bloodgroups: Opt[] = [];
  public bloodgroup: Opt = { Value: 0, Name: ""};

  public grades: Opt[] = [];
  public grade: number = 0;
  public studentGrade: Opt = { Value: 0, Name: ""};
  public bestfridndGrade: Opt = { Value: 0, Name: ""};

  public no: string = "";
  public code: string = "";
  public age: string = "";
  public brethrenamount: string = "";
  public brethrenno: string = "";
  public birthday: Date = new Date();

  public parent1Age: string = "";
  public parent2Age: string = "";
  public parent3Age: string = "";

  public studentReg: StudentRegister;
  constructor(
    private config: ConfigService,
    private studentRegServ: StudentRegisterService
  ) { 

    this.studentReg = {
      Ref: 0,
      RegDate: '',
      Grade: 0,
      Room: '',
      No: 0,
      Code: '',
      Student_firstname: '',
      Student_lastname: '',
      Student_age: 0,
      Student_religion: 0,
      Student_bloodgroup: 0,
      Student_birthday: '',
      Student_livewith: '',
      Student_addrno: '',
      Student_addrmoo: '',
      Student_addrvill: '',
      Student_addrsoi: '',
      Student_addrstreet: '',
      Student_addrtambol: '',
      Student_addramphur: '',
      Student_addrprovince: 0,
      Student_addrzipcode: '',
      Student_phone: '',
      Student_cellphone: '',
      Student_scar: '',
      Student_underlyingdisease: '',
      Student_nickname: '',
      Student_idcard: '',
      Oldschool: '',
      Oldschool_province: 0,
      Brethrenamount: 0,
      Brethrenno: 0,
      Bestfriend: '',
      Bestfriend_grade: 0,
      Bestfriend_phone: '',
      Parent_status1: false,
      Parent_status2: false,
      Parent_status3: false,
      Parent_status4: false,
      Parent_status5: false,
      Parent1_firstname: '',
      Parent1_lastname: '',
      Parent1_age: 0,
      Parent1_religion: 0,
      Parent1_addrno: '',
      Parent1_addrmoo: '',
      Parent1_addrvill: '',
      Parent1_addrsoi: '',
      Parent1_addrstreet: '',
      Parent1_addrtambol: '',
      Parent1_addramphur: '',
      Parent1_addrprovince: 0,
      Parent1_addrzipcode: '',
      Parent1_addrphone: '',
      Parent1_addrcellphone: '',
      Parent1_addrpresentno: '',
      Parent1_addrpresentmoo: '',
      Parent1_addrpresentvill: '',
      Parent1_addrpresentsoi: '',
      Parent1_addrpresentstreet: '',
      Parent1_addrpresenttambol: '',
      Parent1_addrpresentamphur: '',
      Parent1_addrpresentprovince: 0,
      Parent1_addrpresentzipcode: '',
      Parent1_office: '',
      Parent1_officephone: '',
      Parent1_email: '',
      Parent1_edu: 0,
      Parent1_position: '',
      Parent2_firstname: '',
      Parent2_lastname: '',
      Parent2_age: 0,
      Parent2_religion: 0,
      Parent2_addrno: '',
      Parent2_addrmoo: '',
      Parent2_addrvill: '',
      Parent2_addrsoi: '',
      Parent2_addrstreet: '',
      Parent2_addrtambol: '',
      Parent2_addramphur: '',
      Parent2_addrprovince: 0,
      Parent2_addrzipcode: '',
      Parent2_addrphone: '',
      Parent2_addrcellphone: '',
      Parent2_addrpresentno: '',
      Parent2_addrpresentmoo: '',
      Parent2_addrpresentvill: '',
      Parent2_addrpresentsoi: '',
      Parent2_addrpresentstreet: '',
      Parent2_addrpresenttambol: '',
      Parent2_addrpresentamphur: '',
      Parent2_addrpresentprovince: 0,
      Parent2_addrpresentzipcode: '',
      Parent2_office: '',
      Parent2_officephone: '',
      Parent2_email: '',
      Parent2_edu: 0,
      Parent2_position: '',
      Parent3_relation1: false,
      Parent3_relation2: false,
      Parent3_relation: '',
      Parent3_firstname: '',
      Parent3_lastname: '',
      Parent3_age: 0,
      Parent3_addrcellphone: '',
      Parent3_addrpresentno: '',
      Parent3_addrpresepamperntsoi: '',
      Parent3_addrpresentmoo: '',
      Parent3_addrpresentvill: '',
      Parent3_addrpresentsoi: '',
      Parent3_addrpresentstreet: '',
      Parent3_addrpresenttambol: '',
      Parent3_addrpresentamphur: '',
      Parent3_addrpresentprovince: 0,
      Parent3_addrpresentzipcode: '',
      Parent3_religion: 0,
      Parent3_addrphone: '',
      Parent3_office: '',
      Parent3_officephone: '',
      Parent3_email: '',
      Parent3_edu: 0,
      Parent3_position: '',
      ImgBase64: '',
      ImgBase64P1: '',
      ImgBase64P2: '',
      ImgBase64P3: '',
    };
    
  }

  ngOnInit(): void {
    this.provinceNames = [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',  
      'เมษายน',  
      'พฤษภาคม',   
      'มิถุนายน',  
      'กรกฎาคม', 
      'สิงหาคม', 
      'กันยายน', 
      'ตุลาคม', 
      'พฤศจิกายน', 
      'ธันวาคม',
    ] 

    this.config.getGrades().subscribe( 
      (grades) => {
        this.grades = grades;
        this.studentGrade = this.grades[0];
        this.bestfridndGrade = this.grades[0];
      }
    )

    this.studentRegServ.getProvinces().subscribe(
      (provinces) => {
        this.provinces = provinces;
        this.studentProvince = this.provinces[0];
        this.oldschoolProvince = this.provinces[0];
        this.parent1Province = this.provinces[0];
        this.parent1PresentProvince = this.provinces[0];
        this.parent2Province = this.provinces[0];
        this.parent2PresentProvince = this.provinces[0];
        this.parent3PresentProvince = this.provinces[0];
      }
    )
    
    this.studentRegServ.getEducations().subscribe(
      (educations) => {
        this.educations = educations;
        this.parent1Education = this.educations[0];
        this.parent2Education = this.educations[0];
        this.parent3Education = this.educations[0];
      }
    )
    
    this.studentRegServ.getReligion().subscribe(
      (religions) => {
        this.religions = religions;
        this.studentReligion = this.religions[0];
        this.parent1Religion = this.religions[0];
        this.parent2Religion = this.religions[0];
      }
    )

    this.studentRegServ.getBloodGroup().subscribe(
      (bloodgroup) => {
        this.bloodgroups = bloodgroup;
        this.bloodgroup = this.bloodgroups[0];
      }
    )

    this.blankpic = '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'; 

    this.initComponent();
  
    this.config.getGrades().subscribe( 
      (grades) => {
        this.grades = grades;
        this.studentGrade = this.grades[0];
        this.bestfridndGrade = this.grades[0];
      }
    )

    this.studentRegServ.getProvinces().subscribe(
      (provinces) => {
        this.provinces = provinces;
        this.studentProvince = this.provinces[0];
        this.oldschoolProvince = this.provinces[0];
        this.parent1Province = this.provinces[0];
        this.parent1PresentProvince = this.provinces[0];
        this.parent2Province = this.provinces[0];
        this.parent2PresentProvince = this.provinces[0];
        this.parent3PresentProvince = this.provinces[0];
      }
    )
    
    this.studentRegServ.getEducations().subscribe(
      (educations) => {
        this.educations = educations;
        this.parent1Education = this.educations[0];
        this.parent2Education = this.educations[0];
        this.parent3Education = this.educations[0];
      }
    )
    
    this.studentRegServ.getReligion().subscribe(
      (religions) => {
        this.religions = religions;
        this.studentReligion = this.religions[0];
        this.parent1Religion = this.religions[0];
        this.parent2Religion = this.religions[0];
      }
    )

    this.studentRegServ.getBloodGroup().subscribe(
      (bloodgroup) => {
        this.bloodgroups = bloodgroup;
        this.bloodgroup = this.bloodgroups[0];
      }
    )

    this.blankpic = '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'; 

    //this.initComponent();
  }
  
  initComponent() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');   //January is 0!
    var yyyy = today.getFullYear();
    this.code = '00000';

    this.studentReg = {
      Ref: 0,
      RegDate: '',
      Grade: 0,
      Room: '',
      No: 0,
      Code: '',
      Student_firstname: '',
      Student_lastname: '',
      Student_age: 0,
      Student_religion: 0,
      Student_bloodgroup: 0,
      Student_birthday: '',
      Student_livewith: '',
      Student_addrno: '',
      Student_addrmoo: '',
      Student_addrvill: '',
      Student_addrsoi: '',
      Student_addrstreet: '',
      Student_addrtambol: '',
      Student_addramphur: '',
      Student_addrprovince: 0,
      Student_addrzipcode: '',
      Student_phone: '',
      Student_cellphone: '',
      Student_scar: '',
      Student_underlyingdisease: '',
      Student_nickname: '',
      Student_idcard: '',
      Oldschool: '',
      Oldschool_province: 0,
      Brethrenamount: 0,
      Brethrenno: 0,
      Bestfriend: '',
      Bestfriend_grade: 0,
      Bestfriend_phone: '',
      Parent_status1: false,
      Parent_status2: false,
      Parent_status3: false,
      Parent_status4: false,
      Parent_status5: false,
      Parent1_firstname: '',
      Parent1_lastname: '',
      Parent1_age: 0,
      Parent1_religion: 0,
      Parent1_addrno: '',
      Parent1_addrmoo: '',
      Parent1_addrvill: '',
      Parent1_addrsoi: '',
      Parent1_addrstreet: '',
      Parent1_addrtambol: '',
      Parent1_addramphur: '',
      Parent1_addrprovince: 0,
      Parent1_addrzipcode: '',
      Parent1_addrphone: '',
      Parent1_addrcellphone: '',
      Parent1_addrpresentno: '',
      Parent1_addrpresentmoo: '',
      Parent1_addrpresentvill: '',
      Parent1_addrpresentsoi: '',
      Parent1_addrpresentstreet: '',
      Parent1_addrpresenttambol: '',
      Parent1_addrpresentamphur: '',
      Parent1_addrpresentprovince: 0,
      Parent1_addrpresentzipcode: '',
      Parent1_office: '',
      Parent1_officephone: '',
      Parent1_email: '',
      Parent1_edu: 0,
      Parent1_position: '',
      Parent2_firstname: '',
      Parent2_lastname: '',
      Parent2_age: 0,
      Parent2_religion: 0,
      Parent2_addrno: '',
      Parent2_addrmoo: '',
      Parent2_addrvill: '',
      Parent2_addrsoi: '',
      Parent2_addrstreet: '',
      Parent2_addrtambol: '',
      Parent2_addramphur: '',
      Parent2_addrprovince: 0,
      Parent2_addrzipcode: '',
      Parent2_addrphone: '',
      Parent2_addrcellphone: '',
      Parent2_addrpresentno: '',
      Parent2_addrpresentmoo: '',
      Parent2_addrpresentvill: '',
      Parent2_addrpresentsoi: '',
      Parent2_addrpresentstreet: '',
      Parent2_addrpresenttambol: '',
      Parent2_addrpresentamphur: '',
      Parent2_addrpresentprovince: 0,
      Parent2_addrpresentzipcode: '',
      Parent2_office: '',
      Parent2_officephone: '',
      Parent2_email: '',
      Parent2_edu: 0,
      Parent2_position: '',
      Parent3_relation1: false,
      Parent3_relation2: false,
      Parent3_relation: '',
      Parent3_firstname: '',
      Parent3_lastname: '',
      Parent3_age: 0,
      Parent3_addrcellphone: '',
      Parent3_addrpresentno: '',
      Parent3_addrpresepamperntsoi: '',
      Parent3_addrpresentmoo: '',
      Parent3_addrpresentvill: '',
      Parent3_addrpresentsoi: '',
      Parent3_addrpresentstreet: '',
      Parent3_addrpresenttambol: '',
      Parent3_addrpresentamphur: '',
      Parent3_addrpresentprovince: 0,
      Parent3_addrpresentzipcode: '',
      Parent3_religion: 0,
      Parent3_addrphone: '',
      Parent3_office: '',
      Parent3_officephone: '',
      Parent3_email: '',
      Parent3_edu: 0,
      Parent3_position: '',
      ImgBase64: '',
      ImgBase64P1: '',
      ImgBase64P2: '',
      ImgBase64P3: '',
    };

    this.studentReg.ImgBase64 = this.blankpic;
    this.studentReg.ImgBase64P1 = this.blankpic;
    this.studentReg.ImgBase64P2 = this.blankpic;
    this.studentReg.ImgBase64P3 = this.blankpic;

    this.parentCheck1 = true;
    this.parentCheck2 = false;
    this.parentCheck3 = false;
  }

  getStudentReg() {

    let idcard = this.studentReg.Student_idcard;
//    let image = this.studentReg.ImgBase64;
//    let image1 = this.studentReg.ImgBase64P1;
//    let image2 = this.studentReg.ImgBase64P2;
//    let image3 = this.studentReg.ImgBase64P3;

    this.studentRegServ.getStudentByIdcard(this.studentReg.Student_idcard).subscribe(
      
      (studentReg) => {

        if(studentReg.Ref != 0) { 

          this.studentReg=studentReg

          if(this.studentReg.Student_idcard == '') {
            this.studentReg.Student_idcard = idcard
          }

          this.studentGrade = this.grades.find(({Value}) => Value === this.studentReg.Grade)!; 
          this.no = String(this.studentReg.No);
          this.age = String(this.studentReg.Student_age);

          this.bloodgroup = this.bloodgroups.find(({Value}) => Value === this.studentReg.Student_bloodgroup)!;

          if(this.bloodgroup == null) {
            this.bloodgroup = this.bloodgroups[0];
          }
          
          this.studentReligion = this.religions.find(({Value}) => Value === this.studentReg.Student_religion)!;

          if(this.studentReligion == null) {
            this.studentReligion = this.religions[0];
          }

          this.studentProvince = this.provinces.find(({Value}) => Value === this.studentReg.Student_addrprovince)!;

          if(this.studentProvince == null) {
            this.studentProvince = this.provinces[0];
          }
          
          this.oldschoolProvince = this.provinces.find(({Value}) => Value === this.studentReg.Oldschool_province)!;

          if(this.oldschoolProvince == null) {
            this.oldschoolProvince = this.provinces[0];
          }

          this.bestfridndGrade = this.grades.find(({Value}) => Value === this.studentReg.Bestfriend_grade)!;

          if(this.bestfridndGrade == null) {
            this.bestfridndGrade = this.grades[0];
          }

          this.brethrenamount = String(this.studentReg.Brethrenamount);
          this.brethrenno = String(this.studentReg.Brethrenno);

          if(this.studentReg.Student_birthday != '1000-01-01') {
            this.birthday = new Date(this.studentReg.Student_birthday.split('-')[1].padStart(2) + '/' + this.studentReg.Student_birthday.split('-')[2].padStart(2) + '/' + this.studentReg.Student_birthday.split('-')[0]);

          } else {
            this.birthday = new Date();
          }

          this.parent1Religion = this.religions.find(({Value}) => Value === this.studentReg.Parent1_religion)!;

          if(this.parent1Religion == null) {
            this.parent1Religion = this.religions[0];
          }

          this.parent1Age = String(this.studentReg.Parent1_age);

          this.parent1Province = this.provinces.find(({Value}) => Value === this.studentReg.Parent1_addrprovince)!;

          if(this.parent1Province == null) {
            this.parent1Province = this.provinces[0];
          }
          
          this.parent1PresentProvince = this.provinces.find(({Value}) => Value === this.studentReg.Parent1_addrpresentprovince)!;

          if(this.parent1PresentProvince == null) {
            this.parent1PresentProvince = this.provinces[0];
          }

          this.parent1Education = this.educations.find(({Value}) => Value === this.studentReg.Parent1_edu)!;

          if(this.parent1Education == null) {
            this.parent1Education = this.educations[0];
          }

          this.parent2Religion = this.religions.find(({Value}) => Value === this.studentReg.Parent2_religion)!;

          if(this.parent2Religion == null) {
            this.parent2Religion = this.religions[0];
          }

          this.parent2Age = String(this.studentReg.Parent2_age);

          this.parent2Province = this.provinces.find(({Value}) => Value === this.studentReg.Parent2_addrprovince)!;

          if(this.parent2Province == null) {
            this.parent2Province = this.provinces[0];
          }

          this.parent2PresentProvince = this.provinces.find(({Value}) => Value === this.studentReg.Parent2_addrpresentprovince)!;

          if(this.parent2PresentProvince == null) {
            this.parent2PresentProvince = this.provinces[0];
          }

          this.parent2Education = this.educations.find(({Value}) => Value === this.studentReg.Parent2_edu)!;

          if(this.parent2Education == null) {
            this.parent2Education = this.educations[0];
          }

          this.parent3Age = String(this.studentReg.Parent3_age);

          this.parent3PresentProvince = this.provinces.find(({Value}) => Value === this.studentReg.Parent3_addrpresentprovince)!;

          if(this.parent3PresentProvince == null) {
            this.parent3PresentProvince = this.provinces[0];
          }
          
          this.parent3Education = this.educations.find(({Value}) => Value === this.studentReg.Parent3_edu)!;

          if(this.parent3PresentProvince == null) {
            this.parent3PresentProvince = this.educations[0];
          }

          if (this.studentReg.ImgBase64 === '') {
            this.studentReg.ImgBase64 = this.blankpic;
          }

          if (this.studentReg.ImgBase64P1 === '') {
            this.studentReg.ImgBase64P1 = this.blankpic;
          }

          if (this.studentReg.ImgBase64P2 === '') {
            this.studentReg.ImgBase64P2 = this.blankpic;
          }

          if (this.studentReg.ImgBase64P3 === '') {
            this.studentReg.ImgBase64P3 = this.blankpic;
          }

        } else {
          let idcard1 = this.studentReg.Student_idcard;
          this.initComponent();

          this.studentReg.Student_idcard = idcard1;
        }
      },

      (err) => {
        let idcard1 = this.studentReg.Student_idcard;
        this.initComponent();

        this.studentReg.Student_idcard = idcard1;
      }
    )
  }

  getFile(event: any) {
    this.files = event.target.files; 
    var reader = new FileReader(); 

    reader.onload = this._handleReaderLoaded.bind(this); 
    reader.readAsBinaryString(this.files[0]); 
  }
  
  getFile1(event: any) {
    this.files = event.target.files; 
    var reader = new FileReader(); 

    reader.onload = this._handleReaderLoaded1.bind(this); 
    reader.readAsBinaryString(this.files[0]); 
  }

  getFile2(event: any) {
    this.files = event.target.files; 
    var reader = new FileReader(); 

    reader.onload = this._handleReaderLoaded2.bind(this); 
    reader.readAsBinaryString(this.files[0]); 
  }

  getFile3(event: any) {
    this.files = event.target.files; 
    var reader = new FileReader(); 

    reader.onload = this._handleReaderLoaded3.bind(this); 
    reader.readAsBinaryString(this.files[0]); 
  }

  _handleReaderLoaded(readerEvt: any) { 
    var binaryString = readerEvt.target.result; 
    this.studentReg.ImgBase64 = btoa(binaryString);  // Converting binary string data. 
  } 

  _handleReaderLoaded1(readerEvt: any) { 
    var binaryString = readerEvt.target.result; 
    this.studentReg.ImgBase64P1 = btoa(binaryString);  // Converting binary string data. 
  } 

  _handleReaderLoaded2(readerEvt: any) { 
    var binaryString = readerEvt.target.result; 
    this.studentReg.ImgBase64P2 = btoa(binaryString);  // Converting binary string data. 
  } 

  _handleReaderLoaded3(readerEvt: any) { 
    var binaryString = readerEvt.target.result; 
    this.studentReg.ImgBase64P3 = btoa(binaryString);  // Converting binary string data. 
  } 

  parentCheckChanged(id: number) {

    switch(id) {

      case 1: {
        this.parentCheck1 = true;
        this.parentCheck2 = false;
        this.parentCheck3 = false;
        break;
      }

      case 2: {
        this.parentCheck1 = false;
        this.parentCheck2 = true;
        this.parentCheck3 = false;
        break;
      }

      case 3: {
        this.parentCheck1 = false;
        this.parentCheck2 = false;
        this.parentCheck3 = true;
        break;
      }
    }
  }

  copyStudentAddrToParent1() {
    this.studentReg.Parent1_addrno = this.studentReg.Student_addrno;
    this.studentReg.Parent1_addrmoo = this.studentReg.Student_addrmoo;
    this.studentReg.Parent1_addrvill = this.studentReg.Student_addrvill;
    this.studentReg.Parent1_addrsoi = this.studentReg.Student_addrsoi;
    this.studentReg.Parent1_addrstreet = this.studentReg.Student_addrstreet;
    this.studentReg.Parent1_addrtambol = this.studentReg.Student_addrtambol;
    this.studentReg.Parent1_addramphur = this.studentReg.Student_addramphur;

    this.studentReg.Parent1_addrprovince = this.studentReg.Student_addrprovince;
    this.parent1Province = this.provinces.find(({Value}) => Value === this.studentReg.Parent1_addrprovince)!;
    
    this.studentReg.Parent1_addrzipcode = this.studentReg.Student_addrzipcode;
    this.studentReg.Parent1_addrphone = this.studentReg.Student_addramphur;
  }
  
  copyStudentAddrToParent2() {
    this.studentReg.Parent2_addrno = this.studentReg.Student_addrno;
    this.studentReg.Parent2_addrmoo = this.studentReg.Student_addrmoo;
    this.studentReg.Parent2_addrvill = this.studentReg.Student_addrvill;
    this.studentReg.Parent2_addrsoi = this.studentReg.Student_addrsoi;
    this.studentReg.Parent2_addrstreet = this.studentReg.Student_addrstreet;
    this.studentReg.Parent2_addrtambol = this.studentReg.Student_addrtambol;
    this.studentReg.Parent2_addramphur = this.studentReg.Student_addramphur;

    this.studentReg.Parent2_addrprovince = this.studentReg.Student_addrprovince;
    this.parent2Province = this.provinces.find(({Value}) => Value === this.studentReg.Parent1_addrprovince)!;

    this.studentReg.Parent2_addrzipcode = this.studentReg.Student_addrzipcode;
    this.studentReg.Parent2_addrphone = this.studentReg.Student_addramphur;
  }
  
  copyStudentAddrToParent3() {
    this.studentReg.Parent3_addrpresentno = this.studentReg.Student_addrno;
    this.studentReg.Parent3_addrpresentmoo = this.studentReg.Student_addrmoo;
    this.studentReg.Parent3_addrpresentvill = this.studentReg.Student_addrvill;
    this.studentReg.Parent3_addrpresentsoi = this.studentReg.Student_addrsoi;
    this.studentReg.Parent3_addrpresentstreet = this.studentReg.Student_addrstreet;
    this.studentReg.Parent3_addrpresenttambol = this.studentReg.Student_addrtambol;
    this.studentReg.Parent3_addrpresentamphur = this.studentReg.Student_addramphur;

    this.studentReg.Parent3_addrpresentprovince = this.studentReg.Student_addrprovince;
    this.parent3PresentProvince = this.provinces.find(({Value}) => Value === this.studentReg.Parent1_addrprovince)!;
    
    this.studentReg.Parent3_addrpresentzipcode = this.studentReg.Student_addrzipcode;
    this.studentReg.Parent3_addrphone = this.studentReg.Student_addramphur;
  }

  copyaddrparent1() {
    this.studentReg.Parent1_addrpresentno = this.studentReg.Parent1_addrno; 
    this.studentReg.Parent1_addrpresentmoo = this.studentReg.Parent1_addrmoo; 
    this.studentReg.Parent1_addrpresentvill = this.studentReg.Parent1_addrvill; 
    this.studentReg.Parent1_addrpresentsoi = this.studentReg.Parent1_addrsoi; 
    this.studentReg.Parent1_addrpresentstreet = this.studentReg.Parent1_addrstreet; 
    this.studentReg.Parent1_addrpresenttambol = this.studentReg.Parent1_addrtambol; 
    this.studentReg.Parent1_addrpresentamphur = this.studentReg.Parent1_addramphur; 

    this.studentReg.Parent1_addrprovince = this.parent1Province.Value;
    this.studentReg.Parent1_addrpresentprovince = this.studentReg.Parent1_addrprovince; 
    this.parent1PresentProvince = this.provinces.find(({Value}) => Value === this.studentReg.Parent1_addrprovince)!;

    this.studentReg.Parent1_addrpresentzipcode = this.studentReg.Parent1_addrzipcode; 
  }

  copyaddrparent2() {
    this.studentReg.Parent2_addrpresentno = this.studentReg.Parent2_addrno; 
    this.studentReg.Parent2_addrpresentmoo = this.studentReg.Parent2_addrmoo; 
    this.studentReg.Parent2_addrpresentvill = this.studentReg.Parent2_addrvill; 
    this.studentReg.Parent2_addrpresentsoi = this.studentReg.Parent2_addrsoi; 
    this.studentReg.Parent2_addrpresentstreet = this.studentReg.Parent2_addrstreet; 
    this.studentReg.Parent2_addrpresenttambol = this.studentReg.Parent2_addrtambol; 
    this.studentReg.Parent2_addrpresentamphur = this.studentReg.Parent2_addramphur; 

    this.studentReg.Parent2_addrprovince = this.parent2Province.Value;
    this.studentReg.Parent2_addrpresentprovince = this.studentReg.Parent2_addrprovince; 
    this.parent2PresentProvince = this.provinces.find(({Value}) => Value === this.studentReg.Parent2_addrprovince)!;

    this.studentReg.Parent2_addrpresentzipcode = this.studentReg.Parent2_addrzipcode; 
  }

  save() {

    this.studentReg.Grade = this.studentGrade.Value;
    this.studentReg.No = Number(this.no);
    this.studentReg.Student_age = Number(this.age);
    this.studentReg.Student_bloodgroup = this.bloodgroup.Value;
    this.studentReg.Student_religion = this.studentReligion.Value;
    this.studentReg.Student_addrprovince = this.studentProvince.Value;
    this.studentReg.Oldschool_province = this.oldschoolProvince.Value;
    this.studentReg.Bestfriend_grade = this.bestfridndGrade.Value;
    this.studentReg.Brethrenamount = Number(this.brethrenamount)
    this.studentReg.Brethrenno = Number(this.brethrenno);

    var bday:Date = new Date(this.birthday);

    if(!isNaN(bday.getTime())) {
      this.studentReg.Student_birthday = bday.getFullYear() + '-' + (bday.getMonth()+1) + '-' + bday.getDate() ; 
    } else {
      this.studentReg.Student_birthday = ''; 
    }

    this.studentReg.Parent1_religion = this.parent1Religion.Value;
    this.studentReg.Parent1_age = Number(this.parent1Age);
    this.studentReg.Parent1_addrprovince = Number(this.parent1Province.Value);
    this.studentReg.Parent1_addrpresentprovince = Number(this.parent1PresentProvince.Value);
    this.studentReg.Parent1_edu = this.parent1Education.Value;

    this.studentReg.Parent2_religion = this.parent2Religion.Value;
    this.studentReg.Parent2_age = Number(this.parent2Age);
    this.studentReg.Parent2_addrprovince = Number(this.parent2Province.Value);
    this.studentReg.Parent2_addrpresentprovince = Number(this.parent2PresentProvince.Value);
    this.studentReg.Parent2_edu = this.parent2Education.Value;

    this.studentReg.Parent3_age = Number(this.parent3Age);
    this.studentReg.Parent3_addrpresentprovince = Number(this.parent3PresentProvince.Value);
    this.studentReg.Parent3_edu = this.parent3Education.Value;

    this.studentRegServ.save(this.studentReg).subscribe (
      response => console.log(response),
      error => console.log(error)
    )
  }

  prepareString(strValue: string): string {
    if (strValue === '' || strValue == undefined) {
      return '                 ';
    }

    return ' ' + strValue + ' ';
  }

  printpdf() {

    this.save();

    if(this.parentCheck1) {
      this.parentDefault = this.prepareString(this.studentReg.Parent1_firstname + '  ' + this.studentReg.Parent1_lastname);
    } else if(this.parentCheck2) {
      this.parentDefault = this.prepareString(this.studentReg.Parent2_firstname + '  ' + this.studentReg.Parent2_lastname);
    } else if(this.parentCheck3) {
      this.parentDefault = this.prepareString(this.studentReg.Parent3_firstname + '  ' + this.studentReg.Parent3_lastname);
    }
    
    var today = new Date();
    var d = String(today.getDate()).padStart(2, '0');
    var m = today.getMonth(); 
    var yyyy = today.getFullYear() + 543;

    const headersize = 15;
    const norsize = 13;

    var student_grade = ' ' + this.studentGrade.Name + ' ';
    var student_room = ' ' + this.studentReg.Room + ' ';
    var student_no = this.prepareString(this.no);
    var student_code = this.prepareString(this.studentReg.Code);
    var student_firstname = this.prepareString(this.studentReg.Student_firstname);
    var student_lastname = this.prepareString(this.studentReg.Student_lastname);
    var student_age = this.prepareString(this.age);

    var bday:Date = new Date(this.birthday);

    if(!isNaN(bday.getTime())) {
      var student_birthday = bday.getDate() + '/' + (bday.getMonth()+1) + '/' + bday.getFullYear(); 
    } else {
      student_birthday = '';
    }

    var student_religion = ' ' + this.studentReligion.Name + ' ';
    var student_bloodgroup = ' ' + this.bloodgroup.Name + ' ';
    var student_livewith = this.prepareString(this.studentReg.Student_livewith);
    var student_addrno = this.prepareString(this.studentReg.Student_addrno);
    var student_addrmoo = this.prepareString(this.studentReg.Student_addrmoo);
    var student_addrvill = this.prepareString(this.studentReg.Student_addrvill);
    var student_addrsoi = this.prepareString(this.studentReg.Student_addrsoi);
    var student_addrstreet = this.prepareString(this.studentReg.Student_addrstreet);
    var student_addrtambol = this.prepareString(this.studentReg.Student_addrtambol);
    var student_addramphur = this.prepareString(this.studentReg.Student_addramphur);
    var student_addrprovince = ' ' + this.studentProvince.Name + ' ';
    var student_addrzipcode = this.prepareString(this.studentReg.Student_addrzipcode);
    var student_phone = this.prepareString(this.studentReg.Student_phone);
    var student_cellphone = this.prepareString(this.studentReg.Student_cellphone);
    var student_scar = this.prepareString(this.studentReg.Student_scar);
    var student_underlyingdisease = this.prepareString(this.studentReg.Student_underlyingdisease);
    var student_nickname = this.prepareString(this.studentReg.Student_nickname);
    var student_idcard = this.prepareString(this.studentReg.Student_idcard);
    var oldschool = this.prepareString(this.studentReg.Oldschool);
    var oldschool_province = ' ' + this.oldschoolProvince.Name + ' ';
    var brethrenamount = this.prepareString(this.brethrenamount);
    var brethrenno = this.prepareString(this.brethrenno);
    var bestfriend = this.prepareString(this.studentReg.Bestfriend);
    var bestfriend_grade = ' ' + this.bestfridndGrade.Name + ' ';
    var bestfriend_phone = this.prepareString(this.studentReg.Bestfriend_phone);

    if (!this.studentReg.Parent_status1) {
      var parent_status1 = '_';
    } else {
      parent_status1 = '/';

    }

    if (!this.studentReg.Parent_status2) {
      var parent_status2 = '_';
    } else {
      parent_status2 = '/';
    }

    if (!this.studentReg.Parent_status3) {
      var parent_status3 = '_';
    } else {
      parent_status3 = '/';
    }
    
    if (!this.studentReg.Parent_status4) {
      var parent_status4 = '_';
    } else {
      parent_status4 = '/';
    }

    if (!this.studentReg.Parent_status5) {
      var parent_status5 = '_';
    } else {
      parent_status5 = '/';
    }

    var parent1_firstname = this.prepareString(this.studentReg.Parent1_firstname);
    var parent1_lastname = this.prepareString(this.studentReg.Parent1_lastname);
    var parent1_age = this.prepareString(this.parent1Age)
    var parent1_religion = ' ' + this.parent1Religion.Name + ' ';
    var parent1_addrno = this.prepareString(this.studentReg.Parent1_addrno);
    var parent1_addrMoo = this.prepareString(this.studentReg.Parent1_addrmoo);
    var parent1_addrvill = this.prepareString(this.studentReg.Parent1_addrvill);
    var parent1_addrsoi = this.prepareString(this.studentReg.Parent1_addrsoi);
    var parent1_addrstreet = this.prepareString(this.studentReg.Parent1_addrstreet);
    var parent1_addrtambol = this.prepareString(this.studentReg.Parent1_addrtambol);
    var parent1_addramphur = this.prepareString(this.studentReg.Parent1_addramphur);
    var parent1_addrprovince = ' ' + this.parent1Province.Name + ' '; 
    var parent1_addrzipcode = this.prepareString(this.studentReg.Parent1_addrzipcode);
    var parent1_addrphone = this.prepareString(this.studentReg.Parent1_addrphone);
    var parent1_addrcellphone = this.prepareString(this.studentReg.Parent1_addrcellphone);
    var parent1_addrpresentno = this.prepareString(this.studentReg.Parent1_addrpresentno);
    var parent1_addrpresentMoo = this.prepareString(this.studentReg.Parent1_addrpresentmoo);
    var parent1_addrpresentvill = this.prepareString(this.studentReg.Parent1_addrpresentvill);
    var parent1_addrpresentsoi = this.prepareString(this.studentReg.Parent1_addrpresentsoi);
    var parent1_addrpresentstreet = this.prepareString(this.studentReg.Parent1_addrpresentstreet);
    var parent1_addrpresenttambol = this.prepareString(this.studentReg.Parent1_addrpresenttambol);
    var parent1_addrpresentamphur = this.prepareString(this.studentReg.Parent1_addrpresentamphur);
    var parent1_addrpresentprovince = ' ' + this.parent1PresentProvince.Name + ' '; 
    var parent1_addrpresentzipcode = this.prepareString(this.studentReg.Parent1_addrzipcode);
    var parent1_office = this.prepareString(this.studentReg.Parent1_office);
    var parent1_email = this.prepareString(this.studentReg.Parent1_email);
    var parent1_officephone = this.prepareString(this.studentReg.Parent1_officephone);
    var parent1_edu = ' ' + this.parent1Education.Name + ' ';
    var parent1_position = this.prepareString(this.studentReg.Parent1_position);

    var parent2_firstname = this.prepareString(this.studentReg.Parent2_firstname);
    var parent2_lastname = this.prepareString(this.studentReg.Parent2_lastname);
    var parent2_age = this.prepareString(this.parent2Age)
    var parent2_religion = ' ' + this.parent2Religion.Name + ' ';
    var parent2_addrno = this.prepareString(this.studentReg.Parent2_addrno);
    var parent2_addrMoo = this.prepareString(this.studentReg.Parent2_addrmoo);
    var parent2_addrvill = this.prepareString(this.studentReg.Parent2_addrvill);
    var parent2_addrsoi = this.prepareString(this.studentReg.Parent2_addrsoi);
    var parent2_addrstreet = this.prepareString(this.studentReg.Parent2_addrstreet);
    var parent2_addrtambol = this.prepareString(this.studentReg.Parent2_addrtambol);
    var parent2_addramphur = this.prepareString(this.studentReg.Parent2_addramphur);
    var parent2_addrprovince = ' ' + this.parent2Province.Name + ' '; 
    var parent2_addrzipcode = this.prepareString(this.studentReg.Parent2_addrzipcode);
    var parent2_addrphone = this.prepareString(this.studentReg.Parent2_addrphone);
    var parent2_addrcellphone = this.prepareString(this.studentReg.Parent2_addrcellphone);
    var parent2_addrpresentno = this.prepareString(this.studentReg.Parent2_addrpresentno);
    var parent2_addrpresentMoo = this.prepareString(this.studentReg.Parent2_addrpresentmoo);
    var parent2_addrpresentvill = this.prepareString(this.studentReg.Parent2_addrpresentvill);
    var parent2_addrpresentsoi = this.prepareString(this.studentReg.Parent2_addrpresentsoi);
    var parent2_addrpresentstreet = this.prepareString(this.studentReg.Parent2_addrpresentstreet);
    var parent2_addrpresenttambol = this.prepareString(this.studentReg.Parent2_addrpresenttambol);
    var parent2_addrpresentamphur = this.prepareString(this.studentReg.Parent2_addrpresentamphur);
    var parent2_addrpresentprovince = ' ' + this.parent2PresentProvince.Name + ' '; 
    var parent2_addrpresentzipcode = this.prepareString(this.studentReg.Parent2_addrzipcode);
    var parent2_office = this.prepareString(this.studentReg.Parent2_office);
    var parent2_email = this.prepareString(this.studentReg.Parent2_email);
    var parent2_officephone = this.prepareString(this.studentReg.Parent2_officephone);
    var parent2_edu = ' ' + this.parent2Education.Name + ' ';
    var parent2_position = this.prepareString(this.studentReg.Parent2_position);

    if(!this.studentReg.Parent3_relation1) {
      var parent3_relation1 = '_';
    } else {
      parent3_relation1 = '/';
    }

    if(!this.studentReg.Parent3_relation2) {
      var parent3_relation2 = '_';
    } else {
      parent3_relation2 = '/';
    }

    var parent3_relation = this.prepareString(this.studentReg.Parent3_relation);
    var parent3_firstname = this.prepareString(this.studentReg.Parent3_firstname);
    var parent3_lastname = this.prepareString(this.studentReg.Parent3_lastname);
    var parent3_age = this.prepareString(this.parent3Age)
    var parent3_addrpresentno = this.prepareString(this.studentReg.Parent3_addrpresentno);
    var parent3_addrpresentMoo = this.prepareString(this.studentReg.Parent3_addrpresentmoo);
    var parent3_addrpresentvill = this.prepareString(this.studentReg.Parent3_addrpresentvill);
    var parent3_addrpresentsoi = this.prepareString(this.studentReg.Parent3_addrpresentsoi);
    var parent3_addrpresentstreet = this.prepareString(this.studentReg.Parent3_addrpresentstreet);
    var parent3_addrpresenttambol = this.prepareString(this.studentReg.Parent3_addrpresenttambol);
    var parent3_addrpresentamphur = this.prepareString(this.studentReg.Parent3_addrpresentamphur);
    var parent3_addrpresentprovince = ' ' + this.parent3PresentProvince.Name + ' '; 
    var parent3_addrpresentzipcode = this.prepareString(this.studentReg.Parent3_addrpresentzipcode);
    var parent3_addrphone = this.prepareString(this.studentReg.Parent3_addrphone);
    var parent3_addrcellphone = this.prepareString(this.studentReg.Parent3_addrcellphone);
    var parent3_office = this.prepareString(this.studentReg.Parent3_office);
    var parent3_email = this.prepareString(this.studentReg.Parent3_email);
    var parent3_officephone = this.prepareString(this.studentReg.Parent3_officephone);
    var parent3_edu = ' ' + this.parent3Education.Name + ' ';
    var parent3_position = this.prepareString(this.studentReg.Parent3_position);

    //const  logo = 'data:image/jpeg;base64,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' 
    const logo = 'data:image/jpeg;base64,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';

    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
    
    (<any>pdfMake).fonts = {
      THSarabunNew: {
        normal: 'THSarabunNew.ttf',
        bold: 'THSarabunNew Bold.ttf',
        italics: 'THSarabunNew Italic.ttf',
        bolditalics: 'THSarabunNew BoldItalic.ttf'
      },
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      }
    };
    const dd = {
//      header: {},
//      footer(currentPage, pageCount) {
//        return { 
//          columns: [
//            { text: 'ท้ายกระดาษ', fontSize: 15, alignment: 'center' },
//            { text: 'หน้าที่ ' + currentPage.toString() + ' จาก ' + pageCount + ' หน้า', margin: [5, 5, 15, 5] , alignment: 'right'},
//          ]};
//      },
      content: [
        {columns: [
          {text: ""},
          {text : [ 
              { text: "โรงเรียนสารวิทยา\n", fontSize: 15, bold: true, alignment: "center" as Alignment}, 
              { text: "ประวัตินักเรียน", fontSize: 15, bold: true, alignment: "center" as Alignment}
          ]},
          { text: 'สำหรับครูที่ปรึกษา', fontSize: 20, bold: true, alignment: "center" as Alignment}, 
        ]},

        {columns: [
          {text: ""},
          {text: [
            {text: '\nชั้น '}, 
            {text: student_grade, decoration: 'underline' as Decoration}, 
            {text: ' ห้อง '}, {text: student_room, decoration: 'underline'as Decoration}, 
            {text: ' เลขที่ '}, {text: student_no, decoration: 'underline'as Decoration}, 
            {text: 'รหัส '}, {text: student_code, decoration: 'underline'as Decoration},
          ], fontSize: norsize, alignment: 'right'as Alignment }

        ]},
//        { canvas: [
//            {
//              type: "text",
//              x: 0,
//              y: 0,
//              font: '36pt Arial',
//              fillStyle: '#3F51B5',
//              text: 'My TEXT'
//            },
//        ]},
        //page 1
//        { absolutePosition: {x: 0, y: 0},
//          canvas: [
//            {type: 'rect',  x: 400, y: 35, w: 140, h: 35, lineWidth: 2}, 
//          ] 
//        },

//        { absolutePosition: {x: 0, y: 0},
//          canvas: [
//            {type: 'rect',  x: 400, y: 35, w: 140, h: 35, lineWidth: 2}, 
//          ] 
//        },
//
        { image: logo, width: 60, height: 80, absolutePosition: {x: 35, y: 20}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64, width: 60, height: 75, absolutePosition: {x: 480, y: 140}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64P1, width: 60, height: 75, absolutePosition: {x: 480, y: 320}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64P2, width: 60, height: 75, absolutePosition: {x: 480, y: 480}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64P3, width: 60, height: 75, absolutePosition: {x: 480, y: 660}},

        { text: '1. ประวัตินักเรียน', fontSize: norsize, bold: true, alignment: 'left' as Alignment},
        { text: [{text: 'ชื่อ '}, {text: student_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: student_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: student_age, decoration: 'underline' as Decoration}, {text: ' ปี'}], fontSize: norsize,  alignment: 'left' as Alignment},
        { text: [{text: 'นับถือศาสนา '}, {text: student_religion, decoration: 'underline' as Decoration}, {text: ' หมู่เลือด '}, {text: student_bloodgroup, decoration: 'underline' as Decoration}, {text: ' วันเดือนปีเกิด '}, {text: student_birthday, decoration: 'underline' as Decoration}, {text: ' ปัจจุบันอาศัยอยู่กับ '}, {text: student_livewith, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: student_addrno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: student_addrmoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: student_addrvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: student_addrsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment},
        { text: [{text: 'ถนน '}, {text: student_addrstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: student_addrtambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: student_addramphur, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'จังหวัด '}, {text: student_addrprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: student_addrzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: student_phone, decoration: 'underline' as Decoration}, {text: ' ลายมือชื่อ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'โทรศัพท์มือถือ '}, {text: student_cellphone, decoration: 'underline' as Decoration}, {text: ' มีตำหนิที่ '}, {text: student_scar, decoration: 'underline' as Decoration}, {text: ' โรคประจำตัว '}, {text: student_underlyingdisease, decoration: 'underline' as Decoration}, {text: ' ชื่อเล่น '}, {text: student_nickname, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'หมายเลขบัตรประจำตัวประชาชน '}, {text: student_idcard, decoration: 'underline' as Decoration}, {text: ' โรงเรียนเดิม '}, {text: oldschool, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: oldschool_province, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'มีพี่น้อง '},  {text: brethrenamount, decoration: 'underline' as Decoration}, {text: ' คน เป็นบุตรลำดับที่ '}, {text: brethrenno, decoration: 'underline' as Decoration}, {text: ' มีความบกพร่อกทางร่างกายคือ '}, {text: student_scar, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'บุคคลที่ใกล้ชิด (น.ร.ส.ย) ชื่อ '}, {text: bestfriend, decoration: 'underline' as Decoration}, {text: ' ศึกษาอยู่ระดับชั้น ม. '}, {text: bestfriend_grade, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: bestfriend_phone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: parent_status1, bold: true}, {text: ' บิดามารดายังมีชีวิต   '}, {text: parent_status2, bold: true}, {text: ' บิดาถึงแก่กรรม   '}, {text: parent_status3, bold: true}, {text: ' มารดาถึงแก่กรรม   '}, {text: parent_status4, bold: true}, {text: ' บิดามารดาอยู่ร่วมกัน   '}, {text: parent_status5, bold: true}, {text: ' บิดามารดาหย่าร้างกัน'}], fontSize: norsize,  alignment: 'left' as Alignment},

        { text: '2. ประวัติบิดา (ผู้ปกครองคนที่ 1)', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: 'ชื่อ '}, {text: parent1_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: parent1_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: parent1_age, decoration: 'underline' as Decoration}, {text: ' ปี ศาสนา '}, {text: parent1_religion, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ตามทะเบียนบ้านเลขที่ '}, {text: parent1_addrno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent1_addrMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent1_addrvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent1_addrsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ถนน '}, {text: parent1_addrstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: parent1_addrtambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent1_addramphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent1_addrprovince, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'รหัสไปรษณีย์ '}, {text: parent1_addrzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent1_addrphone, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: parent1_addrcellphone, decoration: 'underline' as Decoration}, {text: ' ลายมือชื่อ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: parent1_addrpresentno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent1_addrpresentMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent1_addrpresentvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent1_addrpresentsoi, decoration: 'underline' as Decoration}, {text: ' ถนน '}, {text: parent1_addrpresentstreet, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'แขวง '}, {text: parent1_addrpresenttambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent1_addrpresentamphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent1_addrpresentprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: parent1_addrpresentzipcode, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'สถานที่ทำงาน '}, {text: parent1_office, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent1_officephone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'E-mail '}, {text: parent1_email, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'วุฒิการศึกษา '}, {text: parent1_edu, decoration: 'underline' as Decoration}, {text: ' ตำแหน่งหน้าที่ '}, {text: parent1_position, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },

        { text: '3. ประวัติมารดา (ผู้ปกครองคนที่ 2)', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: 'ชื่อ '}, {text: parent2_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: parent2_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: parent2_age, decoration: 'underline' as Decoration}, {text: ' ปี ศาสนา '}, {text: parent2_religion, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ตามทะเบียนบ้านเลขที่ '}, {text: parent2_addrno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent2_addrMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent2_addrvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent2_addrsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ถนน '}, {text: parent2_addrstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: parent2_addrtambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent2_addramphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent2_addrprovince, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'รหัสไปรษณีย์ '}, {text: parent2_addrzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent2_addrphone, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: parent2_addrcellphone, decoration: 'underline' as Decoration}, {text: ' ลายมือชื่อ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: parent2_addrpresentno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent2_addrpresentMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent2_addrpresentvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent2_addrpresentsoi, decoration: 'underline' as Decoration}, {text: ' ถนน '}, {text: parent2_addrpresentstreet, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'แขวง '}, {text: parent2_addrpresenttambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent2_addrpresentamphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent2_addrpresentprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: parent2_addrpresentzipcode, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'สถานที่ทำงาน '}, {text: parent2_office, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent2_officephone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'E-mail '}, {text: parent2_email, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'วุฒิการศึกษา '}, {text: parent2_edu, decoration: 'underline' as Decoration}, {text: ' ตำแหน่งหน้าที่ '}, {text: parent2_position, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        
        { text: '4. ประวัติผู้ปกครองคนที่ 3 เป็นผู้ที่บิดามารดามอบหมายให้ทำหน้าที่แทนได้ และมีความสัมพันธ์กับเด็กนักเรียนในฐานะ', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: parent3_relation1}, {text: ' เป็นพี่   '}, {text: parent3_relation2}, {text: ' เป็นญาติ ระบุ '}, {text: parent3_relation, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ชื่อ '}, {text: parent3_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: parent3_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: parent3_age, decoration: 'underline' as Decoration}, {text:  ' ปี ลายมือ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: parent3_addrpresentno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent3_addrpresentMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent3_addrpresentvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent3_addrpresentsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ถนน '}, {text: parent3_addrpresentstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: parent3_addrpresenttambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent3_addrpresentamphur, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'จังหวัด '}, {text: parent3_addrpresentprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: parent3_addrpresentzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent3_addrphone, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: parent3_addrcellphone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'สถานที่ทำงาน '}, {text: parent3_office, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent3_officephone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'E-mail '}, {text: parent3_email, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'วุฒิการศึกษา '}, {text: parent3_edu, decoration: 'underline' as Decoration}, {text: ' ตำแหน่งหน้าที่ '}, {text: parent3_position, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        
//        //page 2
//        { absolutePosition: {x: 0, y: 0}, pageBreak: 'before' as PageBreak,
//          canvas: [
//            {type: 'rect',  x: 30, y: 125, w: 530, h: 390, lineWidth: 1},
//          ] 
//        },
        { text: 'ใบสัญญาการเป็นผู้ปกครองที่ดีและ', fontSize: headersize, bold: true, alignment: 'center' as Alignment },
        { text: 'มอบสิทธิ์การปกครองนักเรียนให้กับโรงเรียน', fontSize: headersize, bold: true, alignment: 'center' as Alignment },
        { text: [{text: '\nช้าพเจ้า '}, {text: this.parentDefault, decoration: 'underline' as Decoration}, {text: ' เป็นผู้ปกครองนักเรียนชื่อ '}, {text: student_firstname + student_lastname, decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment },
        { text: '\n1. ข้าพเจ้าขอสัญญาว่าจะทำหน้าที่ผู้ปกครองที่ดี และปฏิบัติตามข้อดังนี้', fontSize: headersize, bold: true, alignment: 'left' as Alignment },
        { text: '1.1 ดูแลกวดขันให้นักเรียนในความปกครองของข้าพเจ้าให้เป็นผู้ประพฤติตนเป็นนักเรียนที่ดี อยู่ในกฏระเบียบข้อบังคับ และแนวปฏิบัติที่โรงเรียนกำหนดไว้ทุกประการ', fontSize: norsize, alignment: 'left' as Alignment },
        { text: '1.2 ให้ความร่วมมือกับทางโรงเรียน โดยจะมาโรงเรียน ตามวันและเวลาที่กำหนด ทุกครั้งที่โรงเรียนมีหนังสือเชิญมาเพื่อร่วมกิจกรรม หรือประชุมปรึกษาหารือที่เกี่ยวข้องกับการเรียนการสอน และการปรับปรุงแก้ไขพฤติกรรมของนักเรียน พร้อมลงนามรับทราบทุกครั้งที่มาพบ', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '1.3 ให้กวดขัดนักเรียนกลับถึงบ้านหลังโรงเรียนเลิกทำการ ในเวลาที่เหมาะสม และไม่จัดกิจกรรมอันก่อให้เกิดความเสียหาย ต่อตนเองและโรงเรียนตลอดจนกวดขันให้นักเรียนทำงานหรือการบ้านที่ครูผู้สอนแต่ละวิชามอบหมายอย่างใกล้ชิด', fontSize: norsize, alignment: 'left' as Alignment },
        
        { text: '2 ข้าพเจ้าขอมอบสิทธิ์ในการปกครองดูแลแก้ไขพฤติกรรมของนักเรียนตามแนวนโยบาย กฏ ระเบียบ ข้อบังคับ และแนวปฏิบัติที่โรงเรียนกำหนด รวมทั้งอนุญาตให้ครูผู้รับผิดชอบดำเนินการ ในเรื่องดังต่อไปนี้', fontSize: norsize, bold: true, alignment: 'left' as Alignment }, 
        { text: '2.1 สอบสวนหาข้อเท็จจริง หรือตรวจค้นตัวและอุปกรณ์ต่างๆของนักเรียน เมื่อมีมูลเหตุสงสัยว่านักเรียนมีพฤติกรรมเบี่ยงเบนไป ในทางไม่ดีที่เกิดขึ้นในโรงเรียน', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: [{text: '2.2 เมื่อมีมูลเหตุสงสัยว่านักเรียนมีพฤติกรรมในการใช้สารเสพติด ครูที่ทำหน้าที่สามารถให้นักเรียนนำปัสสาวะของนักเรียนมาตรวจสอบ และเมื่อพบว่านักเรียนใช้สารเสพติด สามารถนำนักเรียนไปพบแพทย์เพื่อตรวจหรือบำบัด '}, {text: 'โดยผู้ปกครองเป็นผู้รับผิดชอบในการจ่ายค่าตรวจ และค่ารักษาพยาบาลทั้งหมด', bold: true, decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '2.3 กรณีที่นักเรียนนำพาสิ่งของผิดระเบียบ ข้อบังคับ ข้อห้ามของโรงเรียน อนุญาตให้ครูที่ทำหน้าที่เก็บของผิดระเบียบเพื่อเก็บรักษาไ้ว้ ให้ผู้ปกครองมารับของคืน ภายในเวลาไม่เกิน 15 วัน หลังจากโรงเรียนมีหนังสือแจ้งไปให้รับทราบ ถ้าผู้ปกครองไม่มาภายในเวลาที่กำหนด ให้ถือว่าสละสิทธิ์ในการรับของคืน และอนุญาตให้โรงเรียนบริจาคให้สาธารณกุศลหรือทำลายทิ้ง โดยไม่ถือว่าเป็นความผิดใดๆ', fontSize: norsize, alignment: 'left' as Alignment },

        { text: '3. การรับนักเรียนออกจากโรงเรียนก่อนเวลาเลิกเรียน ผู้ปกครองต้องมารับนักเรียนด้วยตนเอง (ให้ปฏิบัติตามที่โรงเรียนกำหนด)', fontSize: headersize, bold: true, alignment: 'left' as Alignment }, 
        { text: '3.1 ควรนัดหมายเวลากับนักเรียนล่วงหน้า', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '3.2 นักเรียนต้องขออนุญาตครูผู้สอนประจำวิชาออกมาพบผู้ปกครอง ณ สำนักงานกลุ่มบริหารงานบุคคลตามเวลาที่นัดหมาย', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '3.3 โรงเรียนจะอนุญาตให้ผู้ปกครอง หรือบิดา มารดาของนักเรียนที่มีรายชื่อตามเอกสารมอบตัวฉบับนี้เท่านั้น ที่จะรับนักเรียน ออกนอกบริเวณโรงเรียนได้', fontSize: norsize, bold: true, decoration: 'underline' as Decoration, alignment: 'left' as Alignment },

        { text: [{text: '\n\nลงชื่อ ......................................  ผู้ปกครอง                                                                วัน '}, {text: d, decoration: 'underline' as Decoration}, {text: ' เดือน '}, {text: this.provinceNames[m], decoration: 'underline' as Decoration}, {text: ' พ.ศ.'}, {text: yyyy.toString(), decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment},
        { text: [{text: '      ('}, {text: this.parentDefault, decoration: 'underline' as Decoration}, {text: ' )'}], fontSize: norsize, alignment: 'left' as Alignment, preserveLeadingSpaces: true },

        { text: 'คำยินยอมของนักเรียน', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: 'ข้าพเจ้า '}, {text: student_firstname + student_lastname, decoration: 'underline' as Decoration }, {text: ' รับทราบข้อความที่ผู้ปกครองยินยอมมอบสิทธฺิ์และอำนาจในการปกครองดูแลนักเรียนให้แก่ครูในโรงเรียนแล้ว ข้าพเจ้ายินดีปฏิบัติตามกฏระเบียบข้อบังคับของโรงเรียนโดยเคร่งครัด'}], fontSize: norsize , alignment: 'left' as Alignment },
        { text: [{text: '\nลงชื่อ ......................................  นักเรียน                                                                 วัน '}, {text: d, decoration: 'underline' as Decoration}, {text: ' เดือน '}, {text: this.provinceNames[m], decoration: 'underline' as Decoration}, {text: ' พ.ศ.'}, {text: yyyy.toString(), decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment },
        { text: [{text: '      ( '}, {text: student_firstname + student_lastname, decoration: 'underline' as Decoration}, {text: ' )'}], fontSize: norsize, alignment: 'left' as Alignment, preserveLeadingSpaces: true },
        { text: '\n\n'},

       { columns: [
         {text: [
           {text: 'ครูที่ปรึกษา\n', alignment: 'center' as Alignment, bold: true},
           {text: '\n1.) ..............................   ..............................', alignment: 'center' as Alignment},
           {text: '\n2.) ..............................   ..............................', alignment: 'center' as Alignment},
           {text: '\n3.) ..............................   ..............................', alignment: 'center' as Alignment},
         ]},

         { text: [
           {text: 'หัวหน้าระดับ\n', alignment: 'center' as Alignment, bold: true},
           {text: '\n.....................................', alignment: 'center' as Alignment},
           {text: '\n.....................................', alignment: 'center' as Alignment},
           {text: '\n.....................................', alignment: 'center' as Alignment},
         ]}, 

         { text: [
           {text: 'รองผู้อำนวยการ\n', alignment: 'center' as Alignment, bold: true},
           {text: '\n.....................................', alignment: 'center' as Alignment},
         ]}, 
       ]},
//       
//       //page 3
       { columns: [
         { text: ""},
         { text: [ 
             { text: 'โรงเรียนสารวิทยา\n', fontSize: headersize, bold: true, alignment: 'center' as Alignment}, 
             { text: 'ประวัตินักเรียน', fontSize: headersize, bold: true, alignment: 'center' as Alignment}
          ]},
         { text: 'สำหรับหัวหน้าระดับ', fontSize: 20, bold: true, alignment: 'center' as Alignment }, 
       ], pageBreak: 'before' as PageBreak,},
       { columns: [
         { text: ""},
         { text: [{text: '\nชั้น '}, {text: student_grade, decoration: 'underline' as Decoration}, {text: ' ห้อง '}, {text: student_room, decoration: 'underline' as Decoration}, {text: ' เลขที่ '}, {text: student_no, decoration: 'underline' as Decoration}, {text: 'รหัส '}, {text: student_code, decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'right' as Alignment }
       ]},
//       { absolutePosition: {x: 0, y: 0}, 
//         canvas: [
//           {type: 'rect',  x: 400, y: 35, w: 140, h: 35, lineWidth: 2}, 
//         ] 
//       },
//
        { image: logo, width: 60, height: 80, absolutePosition: {x: 35, y: 20}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64, width: 60, height: 75, absolutePosition: {x: 480, y: 140}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64P1, width: 60, height: 75, absolutePosition: {x: 480, y: 320}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64P2, width: 60, height: 75, absolutePosition: {x: 480, y: 480}},
        { image:'data:image/jpeg;base64,' + this.studentReg.ImgBase64P3, width: 60, height: 75, absolutePosition: {x: 480, y: 660}},

        { text: '1. ประวัตินักเรียน', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: 'ชื่อ '}, {text: student_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: student_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: student_age, decoration: 'underline' as Decoration}, {text: ' ปี'}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'นับถือศาสนา '}, {text: student_religion, decoration: 'underline' as Decoration}, {text: ' หมู่เลือด '}, {text: student_bloodgroup, decoration: 'underline' as Decoration}, {text: ' วันเดือนปีเกิด '}, {text: student_birthday, decoration: 'underline' as Decoration}, {text: ' ปัจจุบันอาศัยอยู่กับ '}, {text: student_livewith, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: student_addrno, decoration: 'underline' as Decoration }, {text: ' หมู่ '}, {text: student_addrmoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: student_addrvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: student_addrsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ถนน '}, {text: student_addrstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: student_addrtambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: student_addramphur, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'จังหวัด '}, {text: student_addrprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: student_addrzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: student_phone, decoration: 'underline' as Decoration}, {text: ' ลายมือชื่อ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'โทรศัพท์มือถือ '}, {text: student_cellphone, decoration: 'underline' as Decoration}, {text: ' มีตำหนิที่ '}, {text: student_scar, decoration: 'underline' as Decoration}, {text: ' โรคประจำตัว '}, {text: student_underlyingdisease, decoration: 'underline' as Decoration}, {text: ' ชื่อเล่น '}, {text: student_nickname, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'หมายเลขบัตรประจำตัวประชาชน '}, {text: student_idcard, decoration: 'underline' as Decoration}, {text: ' โรงเรียนเดิม '}, {text: oldschool, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: oldschool_province, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'มีพี่น้อง '},  {text: brethrenamount, decoration: 'underline' as Decoration}, {text: ' คน เป็นบุตรลำดับที่ '}, {text: brethrenno, decoration: 'underline' as Decoration}, {text: ' มีความบกพร่อกทางร่างกายคือ '}, {text: student_scar, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'บุคคลที่ใกล้ชิด (น.ร.ส.ย) ชื่อ '}, {text: bestfriend, decoration: 'underline' as Decoration}, {text: ' ศึกษาอยู่ระดับชั้น ม. '}, {text: bestfriend_grade, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: bestfriend_phone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: parent_status1, bold: true}, {text: ' บิดามารดายังมีชีวิต   '}, {text: parent_status2, bold: true}, {text: ' บิดาถึงแก่กรรม   '}, {text: parent_status3, bold: true}, {text: ' มารดาถึงแก่กรรม   '}, {text: parent_status4, bold: true}, {text: ' บิดามารดาอยู่ร่วมกัน   '}, {text: parent_status5, bold: true}, {text: ' บิดามารดาหย่าร้างกัน'}], fontSize: norsize,  alignment: 'left' as Alignment },

        { text: '2. ประวัติบิดา (ผู้ปกครองคนที่ 1)', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: 'ชื่อ '}, {text: parent1_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: parent1_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: parent1_age, decoration: 'underline' as Decoration}, {text: ' ปี ศาสนา '}, {text: parent1_religion, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ตามทะเบียนบ้านเลขที่ '}, {text: parent1_addrno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent1_addrMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent1_addrvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent1_addrsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ถนน '}, {text: parent1_addrstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: parent1_addrtambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent1_addramphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent1_addrprovince, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'รหัสไปรษณีย์ '}, {text: parent1_addrzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent1_addrphone, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: parent1_addrcellphone, decoration: 'underline' as Decoration}, {text: ' ลายมือชื่อ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: parent1_addrpresentno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent1_addrpresentMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent1_addrpresentvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent1_addrpresentsoi, decoration: 'underline' as Decoration}, {text: ' ถนน '}, {text: parent1_addrpresentstreet, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'แขวง '}, {text: parent1_addrpresenttambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent1_addrpresentamphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent1_addrpresentprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: parent1_addrpresentzipcode, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'สถานที่ทำงาน '}, {text: parent1_office, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent1_officephone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'E-mail '}, {text: parent1_email, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'วุฒิการศึกษา '}, {text: parent1_edu, decoration: 'underline' as Decoration}, {text: ' ตำแหน่งหน้าที่ '}, {text: parent1_position, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },

        { text: '3. ประวัติมารดา (ผู้ปกครองคนที่ 2)', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: 'ชื่อ '}, {text: parent2_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: parent2_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: parent2_age, decoration: 'underline' as Decoration}, {text: ' ปี ศาสนา '}, {text: parent2_religion, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ตามทะเบียนบ้านเลขที่ '}, {text: parent2_addrno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent2_addrMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent2_addrvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent2_addrsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ถนน '}, {text: parent2_addrstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: parent2_addrtambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent2_addramphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent2_addrprovince, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'รหัสไปรษณีย์ '}, {text: parent2_addrzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent2_addrphone, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: parent2_addrcellphone, decoration: 'underline' as Decoration}, {text: ' ลายมือชื่อ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: parent2_addrpresentno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent2_addrpresentMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent2_addrpresentvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent2_addrpresentsoi, decoration: 'underline' as Decoration}, {text: ' ถนน '}, {text: parent2_addrpresentstreet, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'แขวง '}, {text: parent2_addrpresenttambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent2_addrpresentamphur, decoration: 'underline' as Decoration}, {text: ' จังหวัด '}, {text: parent2_addrpresentprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: parent2_addrpresentzipcode, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'สถานที่ทำงาน '}, {text: parent2_office, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent2_officephone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'E-mail '}, {text: parent2_email, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'วุฒิการศึกษา '}, {text: parent2_edu, decoration: 'underline' as Decoration}, {text: ' ตำแหน่งหน้าที่ '}, {text: parent2_position, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        
        { text: '4. ประวัติผู้ปกครองคนที่ 3 เป็นผู้ที่บิดามารดามอบหมายให้ทำหน้าที่แทนได้ และมีความสัมพันธ์กับเด็กนักเรียนในฐานะ', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: parent3_relation1}, {text: ' เป็นพี่   '}, {text: parent3_relation2}, {text: ' เป็นญาติ ระบุ '}, {text: parent3_relation, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ชื่อ '}, {text: parent3_firstname, decoration: 'underline' as Decoration}, {text: ' นามสกุล '}, {text: parent3_lastname, decoration: 'underline' as Decoration}, {text: ' อายุ '}, {text: parent3_age, decoration: 'underline' as Decoration}, {text:  ' ปี ลายมือ '}, {text: '                              ', decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ที่อยู่ปัจจุบัน เลขที่ '}, {text: parent3_addrpresentno, decoration: 'underline' as Decoration}, {text: ' หมู่ '}, {text: parent3_addrpresentMoo, decoration: 'underline' as Decoration}, {text: ' หมู่บ้าน '}, {text: parent3_addrpresentvill, decoration: 'underline' as Decoration}, {text: ' ซอย '}, {text: parent3_addrpresentsoi, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'ถนน '}, {text: parent3_addrpresentstreet, decoration: 'underline' as Decoration}, {text: ' แขวง '}, {text: parent3_addrpresenttambol, decoration: 'underline' as Decoration}, {text: ' เขต '}, {text: parent3_addrpresentamphur, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'จังหวัด '}, {text: parent3_addrpresentprovince, decoration: 'underline' as Decoration}, {text: ' รหัสไปรษณีย์ '}, {text: parent3_addrpresentzipcode, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent3_addrphone, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์มือถือ '}, {text: parent3_addrcellphone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'สถานที่ทำงาน '}, {text: parent3_office, decoration: 'underline' as Decoration}, {text: ' โทรศัพท์ '}, {text: parent3_officephone, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'E-mail '}, {text: parent3_email, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        { text: [{text: 'วุฒิการศึกษา '}, {text: parent3_edu, decoration: 'underline' as Decoration}, {text: ' ตำแหน่งหน้าที่ '}, {text: parent3_position, decoration: 'underline' as Decoration}], fontSize: norsize,  alignment: 'left' as Alignment },
        
//        //page 4
//       { absolutePosition: {x: 0, y: 0}, pageBreak: 'before',
//         canvas: [
//           {type: 'rect',  x: 30, y: 125, w: 530, h: 390, lineWidth: 1},
//         ] 
//       },
        { text: 'ใบสัญญาการเป็นผู้ปกครองที่ดีและ', fontSize: headersize, bold: true, alignment: 'center' as Alignment },
        { text: 'มอบสิทธิ์การปกครองนักเรียนให้กับโรงเรียน', fontSize: headersize, bold: true, alignment: 'center' as Alignment },
        { text: [{text: '\nช้าพเจ้า '}, {text: this.parentDefault, decoration: 'underline' as Decoration}, {text: ' เป็นผู้ปกครองนักเรียนชื่อ '}, {text: student_firstname + student_lastname, decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment },
        { text: '\n1. ข้าพเจ้าขอสัญญาว่าจะทำหน้าที่ผู้ปกครองที่ดี และปฏิบัติตามข้อดังนี้', fontSize: headersize, bold: true, alignment: 'left' as Alignment },
        { text: '1.1 ดูแลกวดขันให้นักเรียนในความปกครองของข้าพเจ้าให้เป็นผู้ประพฤติตนเป็นนักเรียนที่ดี อยู่ในกฏระเบียบข้อบังคับ และแนวปฏิบัติที่โรงเรียนกำหนดไว้ทุกประการ', fontSize: norsize, alignment: 'left' as Alignment },
        { text: '1.2 ให้ความร่วมมือกับทางโรงเรียน โดยจะมาโรงเรียน ตามวันและเวลาที่กำหนด ทุกครั้งที่โรงเรียนมีหนังสือเชิญมาเพื่อร่วมกิจกรรม หรือประชุมปรึกษาหารือที่เกี่ยวข้องกับการเรียนการสอน และการปรับปรุงแก้ไขพฤติกรรมของนักเรียน พร้อมลงนามรับทราบทุกครั้งที่มาพบ', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '1.3 ให้กวดขัดนักเรียนกลับถึงบ้านหลังโรงเรียนเลิกทำการ ในเวลาที่เหมาะสม และไม่จัดกิจกรรมอันก่อให้เกิดความเสียหาย ต่อตนเองและโรงเรียนตลอดจนกวดขันให้นักเรียนทำงานหรือการบ้านที่ครูผู้สอนแต่ละวิชามอบหมายอย่างใกล้ชิด', fontSize: norsize, alignment: 'left' as Alignment },
        
        { text: '2 ข้าพเจ้าขอมอบสิทธิ์ในการปกครองดูแลแก้ไขพฤติกรรมของนักเรียนตามแนวนโยบาย กฏ ระเบียบ ข้อบังคับ และแนวปฏิบัติที่โรงเรียนกำหนด รวมทั้งอนุญาตให้ครูผู้รับผิดชอบดำเนินการ ในเรื่องดังต่อไปนี้', fontSize: norsize, bold: true, alignment: 'left' as Alignment }, 
        { text: '2.1 สอบสวนหาข้อเท็จจริง หรือตรวจค้นตัวและอุปกรณ์ต่างๆของนักเรียน เมื่อมีมูลเหตุสงสัยว่านักเรียนมีพฤติกรรมเบี่ยงเบนไป ในทางไม่ดีที่เกิดขึ้นในโรงเรียน', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: [{text: '2.2 เมื่อมีมูลเหตุสงสัยว่านักเรียนมีพฤติกรรมในการใช้สารเสพติด ครูที่ทำหน้าที่สามารถให้นักเรียนนำปัสสาวะของนักเรียนมาตรวจสอบ และเมื่อพบว่านักเรียนใช้สารเสพติด สามารถนำนักเรียนไปพบแพทย์เพื่อตรวจหรือบำบัด '}, {text: 'โดยผู้ปกครองเป็นผู้รับผิดชอบในการจ่ายค่าตรวจ และค่ารักษาพยาบาลทั้งหมด', bold: true, decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '2.3 กรณีที่นักเรียนนำพาสิ่งของผิดระเบียบ ข้อบังคับ ข้อห้ามของโรงเรียน อนุญาตให้ครูที่ทำหน้าที่เก็บของผิดระเบียบเพื่อเก็บรักษาไ้ว้ ให้ผู้ปกครองมารับของคืน ภายในเวลาไม่เกิน 15 วัน หลังจากโรงเรียนมีหนังสือแจ้งไปให้รับทราบ ถ้าผู้ปกครองไม่มาภายในเวลาที่กำหนด ให้ถือว่าสละสิทธิ์ในการรับของคืน และอนุญาตให้โรงเรียนบริจาคให้สาธารณกุศลหรือทำลายทิ้ง โดยไม่ถือว่าเป็นความผิดใดๆ', fontSize: norsize, alignment: 'left' as Alignment },

        { text: '3. การรับนักเรียนออกจากโรงเรียนก่อนเวลาเลิกเรียน ผู้ปกครองต้องมารับนักเรียนด้วยตนเอง (ให้ปฏิบัติตามที่โรงเรียนกำหนด)', fontSize: headersize, bold: true, alignment: 'left' as Alignment }, 
        { text: '3.1 ควรนัดหมายเวลากับนักเรียนล่วงหน้า', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '3.2 นักเรียนต้องขออนุญาตครูผู้สอนประจำวิชาออกมาพบผู้ปกครอง ณ สำนักงานกลุ่มบริหารงานบุคคลตามเวลาที่นัดหมาย', fontSize: norsize, alignment: 'left' as Alignment }, 
        { text: '3.3 โรงเรียนจะอนุญาตให้ผู้ปกครอง หรือบิดา มารดาของนักเรียนที่มีรายชื่อตามเอกสารมอบตัวฉบับนี้เท่านั้น ที่จะรับนักเรียน ออกนอกบริเวณโรงเรียนได้', fontSize: norsize, bold: true, decoration: 'underline' as Decoration, alignment: 'left' as Alignment },

        { text: [{text: '\n\nลงชื่อ ......................................  ผู้ปกครอง                                                                วัน '}, {text: d, decoration: 'underline' as Decoration}, {text: ' เดือน '}, {text: this.provinceNames[m], decoration: 'underline' as Decoration}, {text: ' พ.ศ.'}, {text: yyyy.toString(), decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment },
        { text: [{text: '      ('}, {text: this.parentDefault, decoration: 'underline' as Decoration}, {text: ' )'}], fontSize: norsize, alignment: 'left' as Alignment, preserveLeadingSpaces: true},

        { text: 'คำยินยอมของนักเรียน', fontSize: norsize, bold: true, alignment: 'left' as Alignment },
        { text: [{text: 'ข้าพเจ้า '}, {text: student_firstname + student_lastname, decoration: 'underline' as Decoration }, {text: ' รับทราบข้อความที่ผู้ปกครองยินยอมมอบสิทธฺิ์และอำนาจในการปกครองดูแลนักเรียนให้แก่ครูในโรงเรียนแล้ว ข้าพเจ้ายินดีปฏิบัติตามกฏระเบียบข้อบังคับของโรงเรียนโดยเคร่งครัด'}], fontSize: norsize , alignment: 'left' as Alignment },
        { text: [{text: '\nลงชื่อ ......................................  นักเรียน                                                                 วัน '}, {text: d, decoration: 'underline' as Decoration}, {text: ' เดือน '}, {text: this.provinceNames[m], decoration: 'underline' as Decoration}, {text: ' พ.ศ.'}, {text: yyyy.toString(), decoration: 'underline' as Decoration}], fontSize: norsize, alignment: 'left' as Alignment },
        { text: [{text: '      ( '}, {text: student_firstname + student_lastname, decoration: 'underline' as Decoration}, {text: ' )'}], fontSize: norsize, alignment: 'left' as Alignment, preserveLeadingSpaces: true },
        { text: '\n\n'},

       { columns: [
         {text: [
           {text: 'ครูที่ปรึกษา\n', alignment: 'center' as Alignment, bold: true},
           {text: '\n1.) ..............................   ..............................', alignment: 'center' as Alignment},
           {text: '\n2.) ..............................   ..............................', alignment: 'center' as Alignment},
           {text: '\n3.) ..............................   ..............................', alignment: 'center' as Alignment},
         ]},

         { text: [
           {text: 'หัวหน้าระดับ\n', alignment: 'center' as Alignment, bold: true},
           {text: '\n.....................................', alignment: 'center' as Alignment},
           {text: '\n.....................................', alignment: 'center' as Alignment},
           {text: '\n.....................................', alignment: 'center' as Alignment},
         ]}, 

         { text: [
           {text: 'รองผู้อำนวยการ\n', alignment: 'center' as Alignment, bold: true},
           {text: '\n.....................................', alignment: 'center' as Alignment},
         ]}, 
       ]},
      ], 
      defaultStyle: { font: 'THSarabunNew' },
      //watermark: {text: 'ลายน้ำแบบคาด', color: 'blue', opacity: 0.1 , bold: true},
    };

    pdfMake.createPdf(dd).open();
  }

}
