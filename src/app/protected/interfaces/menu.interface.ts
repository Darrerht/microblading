interface padreInterface {
    seccion: string;
    permiso: string[];
    hijos: hijoInterface[];
}
interface hijoInterface {
    nombre: string;
    link: string;
    icono: string;   
}
interface menuInterface {
    menus: padreInterface[];
}

export const menu: menuInterface = {
    menus: [
        {
            seccion: 'Administrador',
            permiso: ['ADMIN_ROLE'],
            hijos: [
                {
                    nombre: 'Usuarios',
                    link: '/dashboard/admin/usuarios',
                    icono: 'people'
                },
                {
                    nombre: 'Cursos',
                    link: '/dashboard/admin/cursos',
                    icono: 'note_add'
                },
                {
                    nombre: 'Tareas',
                    link: '/dashboard/admin/tareas',
                    icono: 'info'
                },
                {
                    nombre: 'Videos',
                    link: '/dashboard/admin/videos',
                    icono: 'videocam'
                },
                {
                    nombre: 'Evaluaciones',
                    link: '/dashboard/admin/evaluaciones',
                    icono: 'task'
                }
            ]
        },
        {
            seccion: 'Usuario',
            permiso: ['ADMIN_ROLE', 'USER_ROLE'],
            hijos: [
                {
                    nombre: 'Mi Perfil',
                    link: '/dashboard/user/usuarios',
                    icono: 'account_circle'
                },
                {
                    nombre: 'Cursos',
                    link: '/dashboard/user/cursos',
                    icono: 'description'
                },
                {
                    nombre: 'Mis Cursos',
                    link: '/dashboard/user/misCursos',
                    icono: 'find_in_page'
                },
                {
                    nombre: 'Mis Evaluaciones',
                    link: '/dashboard/user/evaluaciones',
                    icono: 'task'
                }
            ]
        }
    ]
}