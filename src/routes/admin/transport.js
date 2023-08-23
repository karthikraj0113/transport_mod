import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const transport= lazy(()=>import('../../container/transport/index')); 
const routes=lazy(()=>import('../../container/transport/jobsroutes/routes'));
const students=lazy(()=>import('../../container/transport/students/students'));
const van_status=lazy(()=>import('../../container/transport/van_status/van_status')); 
const Bus=lazy(()=>import('../../container/transport/Service_Maintenance/bus'));
const Service_Maintenance=lazy(()=>import('../../container/transport/Service_Maintenance/Service_Maintenance')); 
const Driver=lazy(()=>import('../../container/transport/Driver/Driver'));
// const Suggestions_Complaints=lazy(()=>import('../../container/transport/Suggestions_Complaints/Suggestions_Complaints'));
const Remainder=lazy(()=>import('../../container/transport/Remainder/Remainder')); 
const Transport = () => {
    const { path } = useRouteMatch();
    return (
      <Switch>
         
         <Route path={`${path}/transport`} component={transport}  />  
         <Route path={`${path}/routes`} component={routes}  />
         <Route path={`${path}/students`} component={students}  />
         <Route path={`${path}/van_status`} component={van_status}  /> 
         <Route path={`${path}/service`} component={Service_Maintenance}  /> 
         <Route path={`${path}/bus`} component={Bus}  />
         <Route path={`${path}/driver`} component={Driver}  />
         {/* <Route path={`${path}/suggestions&complaints`} component={Suggestions_Complaints}  />  */}
         <Route path={`${path}/remainder`} component={Remainder}  /> 
      </Switch>
    );
  };
  
  export default Transport;