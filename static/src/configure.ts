export interface Configure {
  basename: string;
  defaultPath: string;
  collapseMenu: boolean;
  layout: string;
  layoutType: string;
  prebuildLayout: string;
  iconColor: boolean;
  menuFixed: boolean;
  fixedHeader: boolean;
  boxLayout: boolean;
  rtl: boolean;
  menuDropdownIcon: string;
  menuListIcon: string;
  menuActiveColor: string;
  menuTitleColor: string;
  hideCaption: boolean;
  headerBreadcrumbHide: boolean;
  headerBg: string;
  brandBg: string;
  menuBg: string;
  menuBgGradient: string;
  menuBgPattern: string;
  menuBgImage: string;
  configBlock: boolean;
}

export const configure: Configure = {
  basename: '/zen-ipms',
  defaultPath: '/dashboard/default',
  collapseMenu: false,
  layout: 'vertical', // vertical, horizontal
  layoutType: 'default', // default, light, dark
  prebuildLayout: '', // layout-2, layout-3,layout-4,layout-5,layout-6,layout-7,layout-8,layout-9,layout-10,layout-11,layout-12
  iconColor: false,
  menuFixed: true,
  fixedHeader: true,
  boxLayout: false,
  rtl: false,
  menuDropdownIcon: 'default', // default, style2, style3
  menuListIcon: 'default', // default, style2,style3,style4,style5,style6
  menuActiveColor: 'blue', // blue, red, purple, info, dark
  menuTitleColor: 'default', // default,blue, red, purple, info, dark
  hideCaption: false,
  headerBreadcrumbHide: false,
  headerBg: 'light', // light,blue,red,purple,info,dark
  brandBg: 'light', // light,blue,red,purple,info,dark
  menuBg: 'default', // default,light,blue,red,purple,info,dark
  menuBgGradient: 'default', // default,blue,red,purple,info,dark
  menuBgPattern: '', // pt1,pt2,pt3,pt4,pt5,pt6
  menuBgImage: '', // img1,img2,img3,img4,img5
  configBlock: true,
};
