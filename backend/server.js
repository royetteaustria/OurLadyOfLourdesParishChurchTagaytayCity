import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import UserRoutes from './routes/auth/UserRoutes.js'
import weddingRecordsRoutes from './routes/weddingrecords/weddingRecordRoutes.js'
import baptismalRecordsRoutes from './routes/baptismalrecords/baptismalRecordRoutes.js'
import baptismalInquiries from './routes/Inquiries/baptismal.js'
import weddingInquiries from './routes/Inquiries/wedding.js'
import massInquiries from './routes/Inquiries/mass.js'
import Report from './routes/report/Report.js'
import Reservation from './routes/reservation/reservation.js'
import MassClient from './routes/client/mass.js'
import connectDB from './db/conn.js'
import cookieParser from 'cookie-parser';
import weddingClient from './routes/client/wedding.js' 
import binyagClient from './routes/client/Baptismal.js'
import eventRoute from './routes/events/event.js'
import CalendarReservation from './routes/reservation/CalendarForReservation.js'
import BaptismalCalendar from './routes/reservation/BaptismalCalendar.js'
import BaptismalRequirements from './routes/BaptismalRequirements/BaptismalRequirements.js'
import Req from './routes/req/req.js'
import { fileURLToPath } from 'url'; 
import path, { dirname } from 'path';

connectDB();
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000
app.use(cors({ 
    origin: 'http://localhost:5101', 
    credentials: true 
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const uploadsPath = path.join(__dirname, 'uploads');

app.use('/uploads', express.static(uploadsPath));

app.get('/', (req, res) => {
    res.send('This is server')
})

//for authentication
app.use('/api/UserRoutes', UserRoutes);

//for wedding records
app.use('/api/WeddingRecords', weddingRecordsRoutes)

//for baptismalrecords
app.use('/api/BaptismalRecords', baptismalRecordsRoutes)

//for  baptismal inquiries
app.use('/api/baptismalInquiries', baptismalInquiries)

//for wedding inquiries
app.use('/api/weddingInquiries', weddingInquiries)

//for mass reservation
app.use('/api/massInquiries', massInquiries)

// for reports
app.use('/api/ReportModule', Report)

//for reeservation
app.use('/api/Reservation', Reservation)

//for accepting mass client
app.use('/api/MassClient', MassClient)

//for accepting wedding client
app.use('/api/WeddingClient', weddingClient)

//for accpeting baptismal
app.use('/api/BaptismalClient', binyagClient)

app.use('/api/Events', eventRoute)

app.use('/api/CalendarReservation', CalendarReservation)

app.use('/api/BaptismalCalendar', BaptismalCalendar)

app.use('/api/Weddingreq', Req)

app.use('/api/Baptismalreq', BaptismalRequirements)
//for handling error
app.use(notFound);
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})
