import { lazy } from 'react'

const WeddingClientInfo = lazy(() => import('../pages/WedAdmin/pages/Client/ClientInfo'));
const ListofAdmin = lazy(() => import('../pages/ManageAccount/ListOfAdmin'));
const UpdateAccount = lazy(() => import('../pages/ManageAccount/UpdateAccount'));
const AddAccount = lazy(() => import('../pages/ManageAccount/AddAccount'));
//Inquiries
const WeddingInquiries = lazy(() => import('../pages/WedAdmin/pages/Inquiries/WeddingInquiries'))
const baptismalInquiries = lazy(() => import('../pages/WedAdmin/pages/Inquiries/BaptismalInquiries'))
const MassInquiries = lazy(() => import('../pages/Sec/pages/Inquiries/MassInquiries'))
//Secretary
const Client = lazy(() => import('../pages/Sec/pages/client/Client'));
;
const ViewInfoRecord = lazy(() => import('../pages/Sec/pages/record/Add/ViewInfoRecord'));
const InquiriesInfo = lazy(() => import('../pages/Sec/pages/Inquiries/InquiriesInfo'));

const ClientInfo = lazy(() => import('../pages/Sec/pages/client/ClientInfo'));
const BaptismRecord = lazy(() => import('../pages/Sec/pages/record/Record'));
const MainDashboard = lazy(() => import('../pages/Sec/pages/Dashboard/Dashboard'));
// Wedding Admin
const WeddingClient = lazy(() => import('../pages/WedAdmin/pages/Client/WeddingClient'));
const Reservation = lazy(() => import('../pages/WedAdmin/pages/Reservation/SetReservation/Reservation')) ;
const Records = lazy(() => import('../pages/WedAdmin/pages/Records/Records'));

const Report = lazy(() => import('../pages/WedAdmin/pages/reports/Report'));
const AddReport = lazy(() => import('../pages/WedAdmin/pages/reports/AddReport'));
const InfoRecords = lazy(() => import('../pages/WedAdmin/pages/Records/Add/InfoRecords'));
const BaptismalClient = lazy(() => import('../pages/WedAdmin/pages/Client/BaptismalClient'));

const WeddingInfo = lazy(() => import('../pages/WedAdmin/pages/Inquiries/WeddingInfo'));

const InfoBaptismal = lazy(() => import('../pages/WedAdmin/pages/Inquiries/InfoBaptismal'));
const UpdateBaptismalClient = lazy(() => import('../pages/WedAdmin/pages/Client/UpdateBaptismalClient'));

const ListOfReservation = lazy(() => import('../pages/WedAdmin/pages/Reservation/SetReservation/ListOfReservation'));

const BaptismalReservation = lazy(() => import('../pages/WedAdmin/pages/Reservation/BaptismalReservation/BaptismalReservation'))

const SetAppointment = lazy(() => import('../pages/WedAdmin/pages/Reservation/Apppointment/SetAppointment'));


const coreRoutes = [
  {
    path: '/systemAdmin/baptismalReservation',
    title: 'Baptismal Reservation',
    component: BaptismalReservation
},
{
  path: '/systemAdmin/SetAppointment',
  title: 'Baptismal Reservation',
  component: SetAppointment
},

  
  
    {
        path: '/systemAdmin/listOfUser',
        title: 'ListofAdmin',
        component: ListofAdmin
    },
    {
        path: '/systemAdmin/AddAccount',
        title: 'ListofAdmin',
        component: AddAccount
    },
    {
        path: `/systemAdmin/UpdateAccount/:id`,
        title: 'Update Account',
        component: UpdateAccount,
    },
    // Inquiries
    {
        path: `/systemAdmin/WeddingInquiries`,
        title: 'Wedding Inquiries',
        component: WeddingInquiries,
    },
    {
        path: `/systemAdmin/BaptismalInquiries`,
        title: 'Baptismal Inquiries',
        component: baptismalInquiries,
    },
    {
        path: `/systemAdmin/MassInquiries`,
        title: 'Mass Inquiries',
        component: MassInquiries,
    },
    
    //Secretary Panel

    {
        path: '/systemAdmin/BaptismalRecord',
        title: 'Records',
        component: BaptismRecord,
      },
      {
        path: '/systemAdmin/MassClient',
        title: 'Records',
        component: Client,
      },
      
      
    //   {
    //     path: '/systemAdmin/Inquiries',
    //     title: 'Inquiries',
    //     component: MassInquiries,
    //   },
      {
        path: '/systemAdmin/MassClient',
        title: 'Client',
        component: Client,
      },
      {
        path: '/systemAdmin/ViewRecordInfo/:id',
        title: 'View Record',
        component: ViewInfoRecord,
      },
      {
        path: '/systemAdmin/ViewInquiriesInfo/:id',
        title: 'View Info',
        component: InquiriesInfo ,
      },
      
      {
        path: '/systemAdmin/ClientInfo/:id',
        title: 'Client Info',
        component: ClientInfo ,
      },


      //Wedding Admin


    //   {
    //     path: '/systemAdmin/Inquiries',
    //     title: 'Inquiries',
    //     component: WeddingInquiries,
    //   },
      {
        path: '/systemAdmin/WeddingClient',
        title: 'Client',
        component: WeddingClient,
      },
      {
        path: '/systemAdmin/setReservation',
        title: 'Reservation',
        component: Reservation,
      },
      {
        path: '/systemAdmin/WeddingRecord',
        title: 'Records',
        component: Records,
      },
      
      {
        path: '/systemAdmin/reports',
        title: 'Reports',
        component: Report,
      },
      {
        path: '/systemAdmin/addreports',
        title: 'Add Reports',
        component: AddReport
      },
      {
        path: `/systemAdmin/Info/:id`,
        title: 'Information',
        component: InfoRecords
      },
    //   {
    //     path: `/systemAdmin/baptismalInquiries`,
    //     title: 'Baptismal Inquiries',
    //     component: baptismalInquiries
    //   },
      {
        path: `/systemAdmin/baptismalClient`,
        title: 'Baptismal Client',
        component: BaptismalClient
      },
      
      {
        path: `/systemAdmin/WeddingInquiriesInfo/:id`,
        title: 'Baptismal Inquiries',
        component: WeddingInfo
      },
      {
        path: `/systemAdmin/WeddingClientInfo/:id`,
        title: 'Client Info',
        component: WeddingClientInfo
      },
      
      {
        path: `/systemAdmin/BaptismalInfo/:id`,
        title: 'Client Info',
        component: InfoBaptismal
      },
      {
        path: `/systemAdmin/UpdateBaptismalClient/:id`,
        title: 'Client Info',
        component: UpdateBaptismalClient
      },
      
      {
        path: `/systemAdmin/ListOfDate`,
        title: 'List of Date',
        component: ListOfReservation
      },
      
      {
        path: '/systemAdmin/BaptismalDashboard',
        title: 'Baptismal Dashboard',
        component: MainDashboard
      },
      
]

const systemAdminroutes = [...coreRoutes]
export default systemAdminroutes;