import { createRouter, createWebHistory } from 'vue-router';
import UserDashboard from '../components/UserDashboard.vue';
import MakeReport from '../components/users/makeReport.vue'; // Import makeReport.vue
import UserMap from '../components/UserMap.vue';
import UserReportHistory from '../components/users/UserReportHistory.vue';
import userSignup from '../components/users/userSignup.vue';
import LoginUser from '../components/users/LoginUser.vue';

import NpsAdminLogin from '../components/nps/NpsAdminLogin.vue';
import BfpAdminLogin from '../components/bfp/BfpAdminLogin.vue';

import AdminSignUp from '../views/AdminSignUp.vue';
import UserList from '../views/UserList.vue';

import AdminRoleSelector from '../views/AdminRoleSelector.vue';
import UserLogIn from '../views/UserLogIn.vue';

import UserProfile from '../components/users/UserProfile.vue';
import IncidentStatistic from '../components/users/IncidentStatistic.vue';
import ReportIncident from '../components/users/IncidentReport.vue';
import UserMessage from '../components/users/UserMessage.vue';
import IncidentMapping from '../components/users/IncidentMapping.vue';
import UserHome from '../components/users/UserHome.vue';
import UserReports from '../components/users/UserReports.vue';
import UserChangePassword from '../components/users/UserChangePassword.vue';
import UserConfirmPassword from '../components/users/UserConfirmPassword.vue';

import UserAdminMessage from '../components/users/UserAdminMessage.vue';
import NPSResponder from '../components/users/NPSResponder.vue';
import BFPResponder from '../components/users/BFPResponder.vue';
import BFPResponderDashboard from '../components/users/BFPResponderDashboard.vue';

const routes = [
  { path: '/signup', name: 'userSignup', component: userSignup },
  { path: '/login', name: 'LoginUser', component: LoginUser },
  { path: '/dashboard', name: 'UserDashboard', component: UserDashboard },
  { path: '/report', name: 'MakeReport', component: MakeReport },
  { path: '/mapping', name: 'UserMap', component: UserMap }, 
  { path: '/history', name: 'UserReportHistory', component: UserReportHistory },
  { path: '/admin1', name: 'NpsAdminLogin', component: NpsAdminLogin },
  { path: '/admin2', name: 'BfpAdminLogin', component: BfpAdminLogin },
  { path: '/role', name: 'AdminRoleSelector', component: AdminRoleSelector },
  { path: '/users', name: 'UserLogin', component: UserLogIn },
  { path: '/profile', name: 'UserProfile', component: UserProfile }, 
  { path: '/statistic', name: 'IncidentStatistic', component: IncidentStatistic },
  { path: '/incident', name: 'ReportIncident', component: ReportIncident },
  { path: '/message', name: 'UserMessage', component: UserMessage },
  { path: '/maps', name: 'IncidentMapping', component: IncidentMapping },
  { path: '/home', name: 'UserHome', component: UserHome },
  { path: '/cases', name: 'UserReports', component: UserReports },
  { path: '/change', name: 'UserChangePassword', component: UserChangePassword },
  { path: '/confirm', name: 'UserConfirmPassword', component: UserConfirmPassword },
  { path: '/admin_signup', name: 'AdminSignUp', component: AdminSignUp },
  { path: '/user_list', name: 'UserList', component: UserList },

  { path: '/user-admin-message', name: 'UserAdminMessage', component: UserAdminMessage },
  { path: '/nps-responder', name: 'NPSResponder', component: NPSResponder},
  { path: '/bfp-responder', name: 'BFPResponder', component: BFPResponder },
  { path: '/bfp-dashboard', name: 'BFPResponderDashboard', component: BFPResponderDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
