import { lazy } from "react";

const ViewInfoRecord = lazy(() => import("../pages/record/Add/ViewInfoRecord"))
const EditRecord = lazy(() => import('../pages/record/edit/EditRecords'))
const Record = lazy(() => import("../pages/record/Record"))
const AddRecord = lazy(() => import("../pages/record/Add/AddRecord"))
const MainDashboard = lazy(() => import("../pages/Dashboard/Dashboard.tsx"))
const MassInquiries = lazy(() => import("../pages/Inquiries/MassInquiries"))
const Client = lazy(() => import("../pages/client/Client"))
const InquiriesInfo = lazy(() => import("../pages/Inquiries/InquiriesInfo"))
const UpdateMassClient = lazy(() => import("../pages/client/UpdateMassClient.tsx"))
const ClientInfo = lazy(() => import("../pages/client/ClientInfo.tsx"))
const BaptismalRequirements = lazy(() => import("../../weddingAdmin/pages/Client/BaptismalReqFile/BaptismalRequirements"))
const BaptismalRequirementsList = lazy(() => import("../../weddingAdmin/pages/Client/BaptismalReqFile/BaptismalRequirememtsList"))
const UpdateBaptismalReq = lazy(() => import("../../weddingAdmin/pages/Client/BaptismalReqFile/UpdateBaptismalReq"))
const RequirementsInformation = lazy(() => import("../../weddingAdmin/pages/Client/BaptismalReqFile/RequirementsInformation"))
const BaptismalClient = lazy(() => import("../pages/client/BaptismalClient.tsx"))
const BaptismalClientInfo = lazy(() => import("../../weddingAdmin/pages/Client/BaptismalClientInfo.tsx"))
const UpdateBaptismalClient = lazy(() => import("../pages/client/UpdateBaptismalClient.tsx"))


const coreRoutes = [
  {
    path: '/ParishSecretary/Dashboard',
    title: 'Analytics',
    component: MainDashboard,
  },
  {
    path: '/ParishSecretary/BaptismalClientInfo/:id',
    title: 'Analytics',
    component: BaptismalClientInfo,
  },
  
  {
    path: '/ParishSecretary/UpdateBaptismalClient/:id',
    title: 'Analytics',
    component: UpdateBaptismalClient,
  },

  {
    path: '/ParishSecretary/BaptismalClient',
    title: 'Baptismal Client',
    component: BaptismalClient,
  },

  {
    path: '/ParishSecretary/BaptismalRequirementsInfo/:id',
    title: 'Edit Baptismal Reservation',
    component: RequirementsInformation,
  },
  {
    path: '/ParishSecretary/BaptismalRequirementsList',
    title: 'Req List',
    component: BaptismalRequirementsList,
  },
  {
    path: '/ParishSecretary/ManageBaptismalRequirements/:id',
    title: 'Files',
    component: BaptismalRequirements,
  },
  {
    path: '/ParishSecretary/editBaptismalRequirements/:id',
    title: 'Edit Requirements',
    component: UpdateBaptismalReq,
  },
  
    {
      path: '/ParishSecretary/record',
      title: 'Records',
      component: Record,
    },
    {
      path: '/ParishSecretary/Addrecord/:id',
      title: 'Wedding Aanlytics',
      component: AddRecord,
    },
    {
      path: '/ParishSecretary/EdiRecord/:id',
      title: 'Wedding Aanlytics',
      component: EditRecord,
    },
    {
      path: '/ParishSecretary/Inquiries',
      title: 'Inquiries',
      component: MassInquiries,
    },
    {
      path: '/ParishSecretary/Client',
      title: 'Client',
      component: Client,
    },
    {
      path: '/ParishSecretary/ViewRecordInfo/:id',
      title: 'View Record',
      component: ViewInfoRecord,
    },
    {
      path: '/ParishSecretary/ViewInquiriesInfo/:id',
      title: 'View Info',
      component: InquiriesInfo ,
    },
    {
      path: '/ParishSecretary/UpdateMassClient/:id',
      title: 'Update Client',
      component: UpdateMassClient ,
    },
    {
      path: '/ParishSecretary/ClientInfo/:id',
      title: 'Client Info',
      component: ClientInfo ,
    },
  ];
  
  const secretaryroutes = [...coreRoutes];
  export default secretaryroutes;