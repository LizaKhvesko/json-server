import { render } from "./render";

export const filterUsers = () => {
    const btnIsChildren = document.getElementById('btn-isChildren');
    const btnIsPermissions = document.getElementById('btn-isPermissions');
    const btnAll = document.getElementById('btn-isAll');

    btnIsChildren.addEventListener('click', () => {
        userService.filterUsers('children').then(users => {
            render(users);
        })
    });

    btnIsPermissions.addEventListener('click', () => {
        userService.filterUsers('permissions').then(users => {
            render(users);
        })
    });

    btnAll.addEventListener('click', () => {
        userService.getUsers().then(users => {
            render(users);
        })
    });
}