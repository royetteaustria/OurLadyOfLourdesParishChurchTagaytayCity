import { lazy } from 'react';

const MainPageReservation = lazy(() => import('../pages/reservation/MainPage'));
const Baptismal = lazy(() => import('../forms/baptismal/Baptismal'));
const OTP = lazy(() => import('../../../auth/OTP'));
const NewPass = lazy(() => import('../../../auth/NewPass'));
const PageErrror = lazy(() => import('../../../components/error/PageError'));
const hfdshf = lazy(() => import('../../../auth/Login'));
const Mass = lazy(() => import('../forms/mass/Massform'));
const FinalForm = lazy(() => import('../forms/wedding/FinalForm'));
const Forgot = lazy(() => import('../../../auth/Forgot'));
const VerifyEmail = lazy(() => import('../../../auth/VerifyEmail'));
const WeddingReserve = lazy(() => import('../forms/wedding/WeddingReserve'));
const FinalformMass = lazy(() => import('../forms/mass/FinalformMass'));
import FinalBaptismalForm from '../forms/baptismal/FinalBaptismalForm';

const coreRoutes = [
    {
        path: '/reservation',
        title: 'Reservation',
        component: MainPageReservation
    },
    {
        path: '/signIn',
        title: 'SignIn',
        component: hfdshf
    },
    {
        path: '/OtpVerification',
        title: 'OTP',
        component: OTP
    },
    {
        path: '/NewPassword/:id/:token',
        title: 'Change Password',
        component: NewPass
    },
    {
        path: '/baptismalform',
        title: 'Change Password',
        component: FinalBaptismalForm
    },
    {
        path: '*',
        title: 'PageError',
        component: PageErrror
    },
    {
        path: '/weddingForm',
        title: 'PageError',
        component: FinalForm
    },
    {
        path: '/massform',
        title: 'PageError',
        component: FinalformMass
    },
    {
        path: '/emailverification',
        title: 'Email',
        component: Forgot
    },
    {
        path: '/EmailVerified',
        title: 'Email',
        component: VerifyEmail
    },
    

]

const clientroutes = [...coreRoutes]
export default clientroutes;