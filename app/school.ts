export interface School {
}

export interface Opt {
	Value: number;
	Name: string
}

export interface Student {
	Ref: number;
	Code: string;
  Rfid: string;
	IdCard: string;
	Title: number;
	FirstName: string;
	LastName: string;
	NickName: string;
	Gender: number;
	BirthDay: string;
	GradeNo: number;
	GradeName: string;
	RoomNo: number;
	RoomName: string;
  CheckinProfile: string;
  No: number;
	Phone: string;
	LineId: string;
	Facebook: string;
	ParentRef1: number;
	ParentTitle1: number;
	ParentFirstName1: string;
	ParentLastName1: string;
	ParentPhone1: string;
	ParentRef2: number;
	ParentTitle2: number;
	ParentFirstName2: string;
	ParentLastName2: string;
	ParentPhone2: string;
	ParentRef3: number;
	ParentTitle3: number;
	ParentFirstName3: string;
	ParentLastName3: string;
	ParentPhone3: string;
  FaceImg: string;
}

export interface Parent {
	Ref: number;
	IdCard: string;
	Title: number;
	FirstName: string;
	LastName: string;
	Gender: number;
	Addr1: string;
	Addr2: string;
	Addr3: string;
	ProvinceCode: number;
	ProvinceName: string;
	ZipCode: string;
	Phone: string;
	LineId: string;
	Facebook: string;
//	OccupationCode: number;
//	OccupationName: string;
//	Position: string;
//	CompanyName: string;
//	CompanyAddr1: string;
//	CompanyAddr2: string;
//	CompanyAddr3: string;
//	CompanyProvinceCode: number;
//	CompanyProvinceName: string;
//	CompanyZipCode: string;
//	CompanyPhone: string;
//	Salary: number
}

export interface Teacher {
  Ref:        number;
  DeptRef:    number;
  DeptName:   string;
  RoomRef:    number;
  RoomName:   string;
  GradeRef:   number;
  GradeName:  string;
  Code:       string;
  FirstName:  string;
  LastName:   string;
  Phone:      string;
}

export interface Employee {
  Ref: number;
  Code: string;
  TitleRef: number;
  TitleName: string;
  FirstName: string;
  LastName: string;
  DeptRef:  number;
  DeptName: string;
  GradeRef: number;
  GradeName: string;
  RoomRef:  number;
  RoomName: string;
  FaceImg:  string;
}

export interface Department {
  Ref: number;
  Code: string;
  Name: string;
}

export interface Checkinout {
	Ref: number;
	DateTime: string;
	StudentCode: string;
	StudentFullName: string;
	CamNo: string;
	Temperature: number;
  CutPoint: number;
	Status: number;
}

export interface CheckinProfile {
  Group: number;
  DateIn: string;
  YearEdu: number;
  Name: string;
  Time1: string;
  Time2: string;
  Time3: string;
  Point1: number;
  Point2: number;
  Point3: number;
}

export interface Behavior {
	Ref: number;
	GroupNo: number;
	GroupName: string;
	TopicNo: number;
	TopicName: string;
	Point: number;
}

export interface BehaviorPoint {
  Code: string;
  Title: string;
  FullName: string;
  Grade: string;
  Point: number;
}

export interface BehavioralPoint {
	Ref: number;
	GroupNo: number;
	GroupName: string;
	TopicNo: number;
	TopicName: string;
	Point: number;
}

export interface StudentPoint {
 	Ref: number;
	CreateDate: string;
	BehaviorRef: number;
	BehaviorGroupNo: number;
	BehaviorGroupName: string;
	BehaviorTopicNo: string;
	BehaviorTopicName: string;
	BehaviorPoint: number;
	StudentRef: number;
	StudentCode: string;
	StudentFullName: string;
	StudentGradeRef: number;
	StudentGradeName: string;
	StudentRoomRef: number;
	StudentRoomName: string;
}

export interface ReportBehavior001 {
  IdCode: string
  No: string
  Code: string
  Grade: string
  Title: string
  FullName: string
  Room: string
  Point: number
}

export interface ReportStudentBehaviorPoint {
  No: number
  Description: string
  Point: number
}

export interface ReportCheckin001 {
  Code: string
  FullName: string
  ClassRoom: string
  Time_in: string
  Time_out: string
  Status: string
}

export interface ReportCheckin002 {
  ClassName: string
  Room: string
  StudentAmoung: number
  Normal: number
  Absent: number
  Late1: number
  Late2: number
}

export interface Report004 {
  No: string
  Code: string
  Grade: string
  Room: string
  FullName: string
  ImgB64: string
  Created: string
  Behavior_ref: number
}

export interface Report005 {
  Code: string
  Fullname: string
  D01: string
  D02: string
  D03: string
  D04: string
  D05: string
  D06: string
  D07: string
  D08: string
  D09: string
  D10: string
  D11: string
  D12: string
  D13: string
  D14: string
  D15: string
  D16: string
  D17: string
  D18: string
  D19: string
  D20: string
  D21: string
  D22: string
  D23: string
  D24: string
  D25: string
  D26: string
  D27: string
  D28: string
  D29: string
  D30: string
  D31: string
  Total: string
}

export interface Title  {
	Ref: number;
	OrderNo: number;
	Name: string;
}

export interface Grade {
	Ref: number;
	OrderNo: number;
	Name: string;
}

export interface Room {
	Ref: number;
	GradeRef: number;
	GradeOrder: number;
	GradeName: string;
	Name: string;
}

export interface CheckinGroup {
  Ref: number;
  Name: string;
  Late1: string;
  Late1Point: number;
  Late2: string;
  Late2Point: number;
  Late3: string;
  Late3Point: number;
}

export interface Province  {
	Ref: number;
	OrderNo: number;
	Name: string;
}

export interface StudentRegister {
  Ref: number;
  RegDate: string;
  Grade: number;
  Room: string;
  No: number;
  Code: string;
  Student_firstname: string;
  Student_lastname: string;
  Student_age: number;
  Student_religion: number;
  Student_bloodgroup: number;
  Student_birthday: string;
  Student_livewith: string;
  Student_addrno: string;
  Student_addrmoo: string;
  Student_addrvill: string;
  Student_addrsoi: string;
  Student_addrstreet: string;
  Student_addrtambol: string;
  Student_addramphur: string;
  Student_addrprovince: number;
  Student_addrzipcode: string;
  Student_phone: string;
  Student_cellphone: string;
  Student_scar: string;
  Student_underlyingdisease: string;
  Student_nickname: string;
  Student_idcard: string;
  Oldschool: string;
  Oldschool_province: number;
  Brethrenamount: number;
  Brethrenno: number;
  Bestfriend: string;
  Bestfriend_grade: number;
  Bestfriend_phone: string;
  Parent_status1: boolean;
  Parent_status2: boolean;
  Parent_status3: boolean;
  Parent_status4: boolean;
  Parent_status5: boolean;
  Parent1_firstname: string;
  Parent1_lastname: string;
  Parent1_age: number;
  Parent1_religion: number;
  Parent1_addrno: string;
  Parent1_addrmoo: string;
  Parent1_addrvill: string;
  Parent1_addrsoi: string;
  Parent1_addrstreet: string;
  Parent1_addrtambol: string;
  Parent1_addramphur: string;
  Parent1_addrprovince: number;
  Parent1_addrzipcode: string;
  Parent1_addrphone: string;
  Parent1_addrcellphone: string;
  Parent1_addrpresentno: string;
  Parent1_addrpresentmoo: string;
  Parent1_addrpresentvill: string;
  Parent1_addrpresentsoi: string;
  Parent1_addrpresentstreet: string;
  Parent1_addrpresenttambol: string;
  Parent1_addrpresentamphur: string;
  Parent1_addrpresentprovince: number;
  Parent1_addrpresentzipcode: string;
  Parent1_office: string;
  Parent1_officephone: string;
  Parent1_email: string;
  Parent1_edu: number;
  Parent1_position: string;
  Parent2_firstname: string;
  Parent2_lastname: string;
  Parent2_age: number;
  Parent2_religion: number;
  Parent2_addrno: string;
  Parent2_addrmoo: string;
  Parent2_addrvill: string;
  Parent2_addrsoi: string;
  Parent2_addrstreet: string;
  Parent2_addrtambol: string;
  Parent2_addramphur: string;
  Parent2_addrprovince: number;
  Parent2_addrzipcode: string;
  Parent2_addrphone: string;
  Parent2_addrcellphone: string;
  Parent2_addrpresentno: string;
  Parent2_addrpresentmoo: string;
  Parent2_addrpresentvill: string;
  Parent2_addrpresentsoi: string;
  Parent2_addrpresentstreet: string;
  Parent2_addrpresenttambol: string;
  Parent2_addrpresentamphur: string;
  Parent2_addrpresentprovince: number;
  Parent2_addrpresentzipcode: string;
  Parent2_office: string;
  Parent2_officephone: string;
  Parent2_email: string;
  Parent2_edu: number;
  Parent2_position: string;
  Parent3_relation1: boolean;
  Parent3_relation2: boolean;
  Parent3_relation: string;
  Parent3_firstname: string;
  Parent3_lastname: string;
  Parent3_age: number;
  Parent3_addrcellphone: string;
  Parent3_addrpresentno: string;
  Parent3_addrpresepamperntsoi: string;
  Parent3_addrpresentmoo: string;
  Parent3_addrpresentvill: string;
  Parent3_addrpresentsoi: string;
  Parent3_addrpresentstreet: string;
  Parent3_addrpresenttambol: string;
  Parent3_addrpresentamphur: string;
  Parent3_addrpresentprovince: number;
  Parent3_addrpresentzipcode: string;
  Parent3_religion: number;
  Parent3_addrphone: string;
  Parent3_office: string;
  Parent3_officephone: string;
  Parent3_email: string;
  Parent3_edu: number;
  Parent3_position: string;
  ImgBase64: string;
  ImgBase64P1: string;
  ImgBase64P2: string;
  ImgBase64P3: string;
}

export interface SDQ {
  Code: string;
  Type: number;
  Topic1_1: number;  
  Topic1_2: number;  
  Topic1_3: number;  
  Topic1_4: number;  
  Topic1_5: number;  
  Topic1_6: number;  
  Topic1_7: number;  
  Topic1_8: number;  
  Topic1_9: number;  
  Topic1_10: number;  
  Topic1_11: number;  
  Topic1_12: number;  
  Topic1_13: number;  
  Topic1_14: number;  
  Topic1_15: number;  
  Topic1_16: number;  
  Topic1_17: number;  
  Topic1_18: number;  
  Topic1_19: number;  
  Topic1_20: number;  
  Topic1_21: number;  
  Topic1_22: number;  
  Topic1_23: number;  
  Topic1_24: number;  
  Topic1_25: number;  
  Topic2: number;
  Topic2_1: number;
  Topic2_2: number;
  Topic2_3: number;
  Topic2_4: number;
  Topic2_5: number;
  Topic2_6: number;
  Topic2_7: number;
  Topic3_1: number;
  Topic3_2: number;
  Topic3_3: number;
  Topic3_4: number;
  Topic3_5: number;
  Topic3_6: number;
  Topic3_7: number;
  Topic3_8: number;
  Topic3_9: number;
  Topic3_10: number;
  Topic3_11: number;
  Topic3_12: number;
  Topic3_13: number;
  Topic3_14: number;
  Topic3_15: number;
  Topic3_16: number;
  Topic3_17: number;
  Topic3_18: number;
  Topic3_19: number;
  Topic3_20: number;
  Topic3_21: number;
  Topic3_22: number;
  Topic3_23: number;
  Topic3_24: number;
  Topic3_25: number;
  Topic3_26: number;
  Topic3_27: number;
  Topic3_28: number;
  Topic3_29: number;
  Topic3_30: number;
  Topic3_31: number;
  Topic3_32: number;
  Topic3_33: number;
  Topic3_34: number;
  Topic3_35: number;
  Topic3_36: number;
  Topic3_37: number;
  Topic3_38: number;
  Topic3_39: number;
  Topic3_40: number;
  Topic3_41: number;
  Topic3_42: number;
  Topic3_43: number;
  Topic3_44: number;
  Topic3_45: number;
  Topic3_46: number;
  Topic3_47: number;
  Topic3_48: number;
  Topic3_49: number;
  Topic3_50: number;
  Topic3_51: number;
  Topic3_52: number;
}
