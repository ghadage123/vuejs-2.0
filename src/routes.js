import User from './components/user/Users.vue';
import UserStart from './components/user/UserStarts.vue';
import UserDetail from './components/user/UserDetails.vue';
import UserEdit from './components/user/UserEdits.vue';
import Homee from './components/Homee.vue';



export const routes = [
{ path: '', component: Homee },
{ path: '/user/:id', component: User, children: [
{ path: '', component: UserStarts },
{ path: ':id', component: UserDetails},
{ path: ':id/edit', component: UserEdits }

] }

];