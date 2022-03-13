import { render } from "./render";

export const sortUsers = () => {
    const headerSortIsChildren = document.getElementById('sort-is-children');
    headerSortIsChildren.style.cursor = 'pointer';
    let isSort = false;
    headerSortIsChildren.addEventListener('click', () => {
       userService.getSortUsers({
         name: 'children',
         value: isSort ? 'ask' : 'desc'
       }).then(users => {
            render(users)
       })
       isSort = !isSort; 
    })
}