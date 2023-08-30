import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Testcheckbox from './components/Testcheckbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import Practice from './components/Practice';
import MultiInput from './components/MultiInput';
import Test from './components/Test';
import ReadEdit from './components/ReadEdit';
import Table from './components/Table';

import Home from './components/Home';
import Transfer from './components/Transfers';
import EditableTable from './components/EditableTable/EditableTable';
import Pdf from './components/Pdf';
import InvoiceButton from './components/InvoiceButton';
import Invoice from './components/Invoice';
import TestForm from './components/TestForm';
import CheckBoxPratice from './components/CheckBoxPratice';
import DynamicField from './components/DynamicField';
import InputWithAutoSelect from './components/InputWithAutoSelect';
import SelectForm from './components/SelectForm';
import ExportXlsx from './components/ExportXlsx';
import MultiplePractice from './components/MultiplePractice';
import Login from './components/auth/Login';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { useDispatch } from 'react-redux';
import { setUser } from './components/auth/user.reducers';
import { useEffect } from 'react';
import SideBar from './components/SideBar';
import CommonLayout from './components/CommonLayout';
import Login1 from './components/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CommonLayout />} />
          <Route path="/practice" element={<Practice/>} />
          <Route path="/checkbox-practice" element={<CheckBoxPratice/>} />
          <Route path="/dynamic" element={<MultiInput/>} />
          <Route path="/test" element={<Test />} />
          <Route path="/edit" element={<ReadEdit/>}/>
          <Route path="/table" element={<ProtectedRoute ><Table /></ProtectedRoute>} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/editable" element={<EditableTable/>} />
          <Route path="/pdf" element={<Pdf/>} />
          <Route path="/invoiceButton" element={<InvoiceButton/>} />
          <Route path="/invoice" element={<Invoice/>} />
          <Route path="/test-form" element={<TestForm/>} />
          <Route path="/dynamic-field" element={<DynamicField/>} />
          <Route path="/input-auto-select" element={<InputWithAutoSelect/>} />
          <Route path="/debounce-select" element={<SelectForm/>} />
          <Route path="/export-xlsx" element={<ExportXlsx/>} />
          <Route path="/multiple-practice" element={<MultiplePractice/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/design" element={<Login1/>} />
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
