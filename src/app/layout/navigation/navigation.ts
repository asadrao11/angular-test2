import {Injectable} from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  function?: any;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}

const NavigationItems = [
  {
    id: 'navigation',
    title: 'Navigation',
    type: 'group',
    icon: 'feather icon-monitor',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'feather icon-home',
        url: '/public',
        breadcrumbs: false
      },
      {
        id: 'users',
        title: 'Users',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [
          {
            id: 'add',
            title: 'Add User',
            type: 'item',
            url: '/public/add-user',
            target: false
          },
          {
            id: 'view',
            title: 'View Users',
            type: 'item',
            url: '/public/view-user',
            target: false
          }
        ]
      },
      {
        id: 'manufacturers',
        title: 'Manufacturers',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [
          {
            id: 'add',
            title: 'Add Manufacturer',
            type: 'item',
            url: '/public/add-manufacturer',
            target: false
          },
          {
            id: 'view',
            title: 'View Manufacturers',
            type: 'item',
            url: '/public/view-manufacturer',
            target: false
          }
        ]
      },
      {
        id: 'page-layouts',
        title: 'Brands',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [
          {
            id: 'vertical',
            title: 'Add Brand',
            type: 'item',
            url: '/layout/fixed',
            target: true
          },
          {
            id: 'horizontal',
            title: 'View Brands',
            type: 'item',
            url: '/layout/horizontal',
            target: true
          }
        ]
      },
      {
        id: 'basic',
        title: 'Categories',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [
          {
            id: 'button',
            title: 'Add Category',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'View Categories',
            type: 'item',
            url: '/basic/badges'
          }
        ]
      },
      {
        id: 'basic',
        title: 'Product Attributes',
        type: 'collapse',
        icon: 'feather icon-pie-chart',
        children: [
          {
            id: 'button',
            title: 'Add Attributes',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'View Attributes',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'badges',
            title: 'Assign Attributes',
            type: 'item',
            url: '/basic/badges'
          }
        ]
      },
      {
        id: 'basic',
        title: 'Products',
        type: 'collapse',
        icon: 'feather icon-sidebar',
        children: [
          {
            id: 'button',
            title: 'Add Products',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'View Products',
            type: 'item',
            url: '/basic/badges'
          },
          {
            id: 'badges',
            title: 'Assign Product Categories',
            type: 'item',
            url: '/basic/badges'
          }
        ]
      },
      {
        id: 'basic',
        title: 'Assignment',
        type: 'collapse',
        icon: 'feather icon-sidebar',
        children: [
          {
            id: 'button',
            title: 'Assign',
            type: 'item',
            url: '/basic/button'
          },
          {
            id: 'badges',
            title: 'View Assignments',
            type: 'item',
            url: '/basic/badges'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class NavigationItem {
  public get() {
    return NavigationItems;
  }
}
