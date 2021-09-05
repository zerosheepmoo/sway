import React from 'react';
import Dashboard from './components/Dashboard';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import koLocale from 'date-fns/locale/ko';

export default function App() {
  const [locale, setLocale] = React.useState('ko');


  const localeMap = {
    ko: koLocale
  }

  return (
    <div>

      <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[locale]}>
        <Dashboard />
      </LocalizationProvider>
    </div>
  );
}
