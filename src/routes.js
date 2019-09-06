import Users from './components/user/Users.vue';
import UserStarts from './components/user/UserStarts.vue';
import UserDetails from './components/user/UserDetails.vue';
import UserEdits from './components/user/UserEdits.vue';
import Homee from './components/Homee.vue';
import HeaderR from './components/HeaderR.vue';

export const routes = [
    { path: '', name: 'home', components: {
        default: Homee,
        'header-top': HeaderR
    } },
    { path: '/user', components: {
        default: Users,
        'header-bottom': HeaderR
    }, children: [
        { path: '', component: UserStarts },
        { path: ':id', component: UserDetails },
        { path: ':id/edit', component: UserEdits, name: 'userEdit' }
    ] },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/' }
];