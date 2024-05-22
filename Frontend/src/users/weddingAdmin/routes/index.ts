/* eslint-disable @typescript-eslint/no-unused-vars */
import { lazy } from 'react';

const UpdateBaptismalClient = lazy(() => import('../pages/Client/UpdateBaptismalClient'));
const InfoBaptismal = lazy(() => import('../pages/Inquiries/InfoBaptismal'));
const EditRecords = lazy(() => import('../pages/Records/edit/UpdateRecord'));
const MainDashboard = lazy(() => import('../pages/Dashboard/MainDashboard'));
const WeddingAnalytics = lazy(() => import('../pages/Dashboard/WeddingAnalytics'));
const WeddingInquiries = lazy(() => import('../pages/Inquiries/WeddingInquiries'));
const WeddingClient = lazy(() => import('../pages/Client/WeddingClient'));
const Reservation = lazy(() => import('../pages/Reservation/SetReservation/Reservation'));
const Records = lazy(() => import('../pages/Records/Records'));
const Report = lazy(() => import('../pages/reports/Report'))
const AddReport = lazy(() => import('../pages/reports/AddReport'));
const AddRecords = lazy(() => import('../pages/Records/Add/AddRecords'));
const InfoRecords = lazy(() => import('../pages/Records/Add/InfoRecords'));
const baptismalInquiries = lazy(() => import('../pages/Inquiries/BaptismalInquiries'));
const BaptismalClient = lazy(() => import('../pages/Client/BaptismalClient'));
const WeddingInfo = lazy(() => import('../pages/Inquiries/WeddingInfo'));
const ClientInfo = lazy(() => import('../pages/Client/ClientInfo'));
const UpdateWeddingClient = lazy(() => import('../pages/Client/UpdateWeddingClient'));
const BaptismalClientInfo = lazy(() => import('../pages/Client/BaptismalClientInfo'));
const ListOfReservation = lazy(() => import('../pages/Reservation/SetReservation/ListOfReservation'));
const SetAppointment = lazy(() => import('../pages/Reservation/Apppointment/SetAppointment'));
const AddEvent = lazy(() => import('../pages/Reservation/Apppointment/AddEvent/AddEvents'));
const EditAppointment = lazy(() => import('../pages/Reservation/Apppointment/EditAppointment/EditAppointment'));
const Add = lazy(() => import('../pages/Reservation/SetReservation/CalendarReservation/AddReservation/Add'))
const Edit = lazy(() => import('../pages/Reservation/SetReservation/CalendarReservation/EditReservation/Edit'))
const EditReport = lazy(() => import('../pages/reports/EditReport'))

const AddBaptismal = lazy(() => import('../pages/Reservation/BaptismalReservation/CalendarReservation/AddReservation/AddBaptismalReservation'))
const EditBaptismal = lazy(() => import('../pages/Reservation/BaptismalReservation/CalendarReservation/EditReservation/EditBaptismal'))
const BaptismalReservation = lazy(() => import('../pages/Reservation/BaptismalReservation/BaptismalReservation'))
const AcceptWedding = lazy(() => import('../pages/Inquiries/AcceptWeddingInquiries/AcceptWedding'))
const Requirements = lazy(() => import('../pages/Client/FileUpload/WedddingRequirements'))
const RequirementsInfo = lazy(() => import('../pages/Client/FileUpload/RequirementsInfo'))
const UploadFiles = lazy(() => import('../pages/Client/FileUpload/UploadFiles'))
const EditFiles = lazy(() => import('../pages/Client/FileUpload/EditFiles'))
// const BaptismalRequirements = lazy(() => import('../pages/Client/BaptismalReqFile/BaptismalRequirements'))

// const BaptismalRequirementsList = lazy(() => import('../pages/Client/BaptismalReqFile/BaptismalRequirememtsList'))
// const UpdateBaptismalReq = lazy(() => import('../pages/Client/BaptismalReqFile/UpdateBaptismalReq'))

// const RequirementsInformation = lazy(() => import('../pages/Client/BaptismalReqFile/RequirementsInformation'))
const coreRoutes = [
  // {
  //   path: '/weddingAdmin/BaptismalRequirementsInfo/:id',
  //   title: 'Edit Baptismal Reservation',
  //   component: RequirementsInformation,
  // },

  {
    path: '/weddingAdmin/editBaptismalReservation/:id',
    title: 'Edit Baptismal Reservation',
    component: EditBaptismal,
  },
  // {
  //   path: '/weddingAdmin/BaptismalRequirementsList',
  //   title: 'Req List',
  //   component: BaptismalRequirementsList,
  // },
  {
    path: '/weddingAdmin/editRequirements/:id',
    title: 'Edit Requirements',
    component: EditFiles,
  },
  // {
  //   path: '/weddingAdmin/editBaptismalRequirements/:id',
  //   title: 'Edit Requirements',
  //   component: UpdateBaptismalReq,
  // },

  {
    path: '/weddingAdmin/ManageRequirements/:id',
    title: 'Files',
    component: UploadFiles,
  },
  // {
  //   path: '/weddingAdmin/ManageBaptismalRequirements/:id',
  //   title: 'Files',
  //   component: BaptismalRequirements,
  // },
  {
    path: '/weddingAdmin/RequirementsInfo/:id',
    title: 'Edit Baptismal Reservation',
    component: RequirementsInfo,
  },
  {
    path: '/weddingAdmin/Requirements',
    title: 'Edit Baptismal Reservation',
    component: Requirements,
  },
  {
    path: '/weddingAdmin/AccceptWedding/:id',
    title: 'Accept Wedding Reservation',
    component: AcceptWedding,
  },
  {
    path: '/weddingAdmin/addBaptismalReservation',
    title: 'Add Baptismal Reservation',
    component: AddBaptismal,
  },
  {
    path: '/weddingAdmin/BaptismalReservation',
    title: 'Baptismal Reservation',
    component: BaptismalReservation,
  },

  {
    path: '/WeddingAdmin/Dashboard',
    title: 'MainDashboard',
    component: MainDashboard,
  },
  {
    path: '/weddingAdmin/WeddingAnalytics',
    title: 'Wedding Aanlytics',
    component: WeddingAnalytics,
  },
  {
    path: '/weddingAdmin/Inquiries',
    title: 'Inquiries',
    component: WeddingInquiries,
  },
  {
    path: '/weddingAdmin/Client',
    title: 'Client',
    component: WeddingClient,
  },
  {
    path: '/weddingAdmin/Reservation',
    title: 'Reservation',
    component: Reservation,
  },
  {
    path: '/weddingAdmin/records',
    title: 'Records',
    component: Records,
  },
  {
    path: '/weddingAdmin/addrecords/:id',
    title: 'Records',
    component: AddRecords,
  },
 
  {
    path: '/weddingAdmin/reports',
    title: 'Reports',
    component: Report,
  },
  {
    path: '/weddingAdmin/addreports',
    title: 'Add Reports',
    component: AddReport
  },
  {
    path: `/weddingAdmin/Info/:id`,
    title: 'Information',
    component: InfoRecords
  },
  {
    path: `/weddingAdmin/baptismalInquiries`,
    title: 'Baptismal Inquiries',
    component: baptismalInquiries
  },
  {
    path: `/weddingAdmin/baptismalClient`,
    title: 'Baptismal Client',
    component: BaptismalClient
  },
  {
    path: `/weddingAdmin/editRecords/:id`,
    title: 'Baptismal Inquiries',
    component: EditRecords
  },
  {
    path: `/weddingAdmin/WeddingInquiriesInfo/:id`,
    title: 'Baptismal Inquiries',
    component: WeddingInfo
  },
  {
    path: `/weddingAdmin/ClientInfo/:id`,
    title: 'Client Info',
    component: ClientInfo
  },
  {
    path: `/weddingAdmin/UpdateWeddingClient/:id`,
    title: 'Client Info',
    component: UpdateWeddingClient
  },
  {
    path: `/weddingAdmin/BaptismalInfo/:id`,
    title: 'Client Info',
    component: InfoBaptismal
  },
  {
    path: `/weddingAdmin/UpdateBaptismalClient/:id`,
    title: 'Client Info',
    component: UpdateBaptismalClient
  },
  {
    path: `/weddingAdmin/BaptismalClientInfo/:id`,
    title: 'Client Info',
    component: BaptismalClientInfo
  },
  {
    path: `/weddingAdmin/SetAppointment`,
    title: 'Set Appointment',
    component: SetAppointment
  },
  {
    path: `/weddingAdmin/AddEvent`,
    title: 'Add Event',
    component: AddEvent
  },
  {
    path: `/weddingAdmin/EditEvent/:id`,
    title: 'Add Event',
    component: EditAppointment
  },
  {
    path: `/weddingAdmin/listOfDate`,
    title: 'Add Event',
    component: ListOfReservation
  },


  {
    path: `/weddingAdmin/addReservation`,
    title: 'Add Reservation',
    component: Add
  },
  {
    path: `/weddingAdmin/editReservation/:id`,
    title: 'Edit Reservation',
    component: Edit
  },
  {
    path: `/weddingAdmin/editReport/:id`,
    title: 'Edit Report',
    component: EditReport
  },
];

const weddingroutes = [...coreRoutes];
export default weddingroutes;
