function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <app-navbar></app-navbar> -->\n<router-outlet>\n  <app-spinner></app-spinner>\n</router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/configuration/configuration.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/configuration/configuration.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutConfigurationConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.gradientConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\n<div class=\"pcoded-main-container\">\n  <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'}\">\n    <div class=\"pcoded-content\">\n      <div class=\"pcoded-inner-content\">\n        <div class=\"main-body\">\n          <div class=\"page-wrapper\">\n            <app-breadcrumb></app-breadcrumb>\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-configuration></app-configuration>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-bar.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-bar.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavBarNavBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\" *ngIf=\"this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'; else mainHeader\">\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\n</div>\n<ng-template #mainHeader>\n  <div class=\"m-header\" style=\"background: #E13E01\">\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\n    <a [routerLink]=\"['/']\" class=\"b-brand\">\n      <img id=\"main-logo\" src=\"assets/images/logo.png\" alt=\"\" class=\"logo\">\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\">\n    </a>\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\n  </div>\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\" style=\"background: linear-gradient(45deg, #E13E01, #EB7E55)\">\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\n  </div>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-left/nav-left.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-left/nav-left.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavBarNavLeftNavLeftComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"navbar-nav mr-auto\">\n  <li class=\"nav-item\">\n    <app-nav-search></app-nav-search>\n  </li>\n</ul>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavBarNavLeftNavSearchNavSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a href=\"javascript:\" (click)=\"this.searchOn = true\" class=\"pop-search\"><i class=\"feather icon-search\"></i></a>\n<div class=\"search-bar\" *ngIf=\"searchOn\">\n  <input type=\"text\" class=\"form-control border-0 shadow-none\" placeholder=\"Search hear\">\n  <button (click)=\"this.searchOn = false\" type=\"button\" class=\"close\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavBarNavRightChatMsgChatMsgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-list-header\">\n  <h6>{{ chatMessage.name }}</h6>\n  <a href=\"javascript:\" class=\"h-back-user-list\" (click)=\"this.onChatToggle.emit();\"><i class=\"feather icon-chevron-left\"></i></a>\n</div>\n\n<div class=\"h-list-body\">\n  <div class=\"main-chat-cont\">\n    <div class=\"main-friend-chat\">\n      <ng-template #CHATNOTFOUND>\n        <div class=\"media chat-messages text-center\">\n          <div class=\"media-body chat-menu-content\">\n            <div class=\"\">\n              <p class=\"chat-cont\">CHAT NOT FOUND</p>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n      <ng-container *ngIf=\"chatMessage.chat; else CHATNOTFOUND\">\n        <perfect-scrollbar ngClass=\"elite-scroll\" [style.max-width]=\"'350px'\" [style.max-height]=\"'calc(100vh - 170px)'\" [usePSClass]=\"'elite'\" [disabled]=\"null\">\n          <div *ngFor=\"let messages of chatMessage.chat\">\n            <div class=\"media chat-messages\">\n              <a *ngIf=\"messages.type\" class=\"media-left photo-table\" href=\"javascript:\">\n                <img class=\"media-object img-radius img-radius m-t-5\" src=\"{{ chatMessage.photo }}\" alt=\"{{ chatMessage.name }}\">\n              </a>\n              <div class=\"media-body\" [ngClass]=\"{'chat-menu-content' : messages.type, 'chat-menu-reply': !messages.type}\">\n                <div class=\"\">\n                  <p class=\"chat-cont\">{{ messages.msg }}</p>\n                </div>\n                <p class=\"chat-time\">{{ messages.time }}</p>\n              </div>\n            </div>\n          </div>\n          <div #newChat [innerHTML]=\"newReplay\"></div>\n          <div *ngIf=\"friendWriting\" class=\"media chat-messages typing\">\n            <a class=\"media-left photo-table\" href=\"javascript:\"><img class=\"media-object img-radius img-radius m-t-5\" src=\"{{chatMessage.photo}}\" alt=\"{{ chatMessage.name }}\"></a>\n            <div class=\"media-body chat-menu-content\">\n              <div class=\"rem-msg\">\n                <p class=\"chat-cont\">Typing . . .</p>\n              </div>\n              <p class=\"chat-time\">now</p>\n            </div>\n          </div>\n        </perfect-scrollbar>\n      </ng-container>\n    </div>\n  </div>\n</div>\n<div class=\"h-list-footer\">\n  <div class=\"input-group\" (focusout)=\"this.message_error = false;\">\n    <input type=\"file\" class=\"chat-attach\" style=\"display:none\">\n    <a href=\"javascript:\" class=\"input-group-prepend btn btn-success btn-attach\" [ngClass]=\"{'btn-danger': message_error === true}\">\n      <i class=\"feather icon-paperclip\"></i>\n    </a>\n    <input type=\"text\" [(ngModel)]=\"message\" name=\"h-chat-text\" class=\"form-control h-send-chat\" placeholder=\"Write hear . . \" (keyup)=\"sentMsg(1)\" (keyup.enter)=\"sentMsg(0)\">\n    <button type=\"submit\" class=\"input-group-append btn-send btn btn-primary\" [ngClass]=\"{'btn-danger': message_error === true}\" (click)=\"sentMsg(0)\">\n      <i class=\"feather icon-message-circle\"></i>\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavBarNavRightChatUserListChatUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"h-list-header\">\n  <div class=\"input-group\">\n    <input type=\"text\" id=\"search-friends\" class=\"form-control\" placeholder=\"Search Friend . . .\">\n  </div>\n</div>\n<div class=\"h-list-body\">\n  <a href=\"javascript:\" class=\"h-close-text\" (click)=\"this.onChatCollapse.emit();\"><i class=\"feather icon-chevrons-right\"></i></a>\n  <div class=\"main-friend-cont scroll-div\">\n    <div class=\"main-friend-list\">\n      <perfect-scrollbar ngClass=\"elite-scroll\" [style.max-width]=\"'350px'\" [style.max-height]=\"'calc(100vh - 85px)'\" [usePSClass]=\"'elite'\" [disabled]=\"null\">\n        <ng-container *ngFor=\"let friends of friendsList\">\n          <app-friend (onChatOn)=\"onChatOn(friends.id)\" [friends]=\"friends\"></app-friend>\n        </ng-container>\n      </perfect-scrollbar>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavBarNavRightChatUserListFriendFriendComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"media userlist-box ripple\" (click)=\"innerChatToggle(friends.id)\" [attr.data-id]=\"friends.id\" [attr.data-status]=\"{'online': friends.status, 'offline': !friends.status}\" [attr.data-username]=\"friends.name\">\n  <a class=\"media-left\" href=\"javascript:\"><img class=\"media-object img-radius\" src=\"{{friends.photo}}\" alt=\"{{ friends.name }}\"><div class=\"live-status\" *ngIf=\"friends.new\">{{friends.new}}</div></a>\n  <div class=\"media-body\">\n    <h6 class=\"chat-header\">{{friends.name}}<small class=\"d-block\" *ngIf=\"friends.time\" [ngClass]=\"{'text-c-green': friends.status, 'text-c-red': !friends.status}\">{{friends.time}}</small></h6>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/nav-right.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/nav-right.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavBarNavRightNavRightComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"navbar-nav ml-auto\">\n  <li>\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i><span class=\"badge bg-danger\"><span class=\"sr-only\"></span></span></a>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\n        <div class=\"noti-head\">\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\n          <div class=\"float-right\">\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\n            <a href=\"javascript:\">clear all</a>\n          </div>\n        </div>\n        <ul class=\"noti-body\">\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">NEW</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>New ticket Added</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">EARLIER</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>Prchace New Theme and make payment</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>currently login</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n        <div class=\"noti-footer\">\n          <a href=\"javascript:\">show all</a>\n        </div>\n      </div>\n    </div>\n  </li>\n  <li>\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\n        <img src=\"assets/images/user/avatar-1.jpg\" class=\"img-radius wid-40\" alt=\"User-Profile-Image\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\n        <div class=\"pro-head\">\n          <img src=\"assets/images/user/avatar-1.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n          <span>John Doe</span>\n          <a href=\"javascript:\" class=\"dud-logout\" title=\"Logout\">\n            <i class=\"feather icon-log-out\"></i>\n          </a>\n        </div>\n        <ul class=\"pro-body\">\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Messages</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-lock\"></i> Lock Screen</a></li>\n        </ul>\n      </div>\n    </div>\n  </li>\n</ul>\n\n<section class=\"header-user-list\" *ngIf=\"visibleUserList && !this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': visibleUserList}\" [@slideInOutLeft]>\n  <app-chat-user-list (onChatToggle)=\"onChatToggle($event)\" (onChatCollapse)=\"this.visibleUserList = !this.visibleUserList; this.chatMessage = false;\"></app-chat-user-list>\n</section>\n\n<section class=\"header-chat\" *ngIf=\"chatMessage && !this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': chatMessage}\" [@slideInOutLeft]>\n  <app-chat-msg (onChatToggle)=\"this.chatMessage = !this.chatMessage\" [friendId]=\"friendId\"></app-chat-msg>\n</section>\n\n<section class=\"header-user-list\" *ngIf=\"visibleUserList && this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': visibleUserList}\" [@slideInOutRight]>\n  <app-chat-user-list (onChatToggle)=\"onChatToggle($event)\" (onChatCollapse)=\"this.visibleUserList = !this.visibleUserList; this.chatMessage = false;\"></app-chat-user-list>\n</section>\n\n<section class=\"header-chat\" *ngIf=\"chatMessage && this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': chatMessage}\" [@slideInOutRight]>\n  <app-chat-msg (onChatToggle)=\"this.chatMessage = !this.chatMessage\" [friendId]=\"friendId\"></app-chat-msg>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavigationNavContentNavCollapseNavCollapseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <ng-template #itemContent>\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\n        <i class=\"{{item.icon}}\"></i>\n      </span>\n      <span class=\"pcoded-mtext\">{{item.title}}\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n          {{item.badge.title}}\n        </span>\n      </span>\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n  </ng-template>\n  <ng-template #subMenuContent>\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </ng-template>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-content.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-content.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavigationNavContentNavContentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<perfect-scrollbar *ngIf=\"this.gradientConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\" [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" id=\"nav-ps-gradient-able\" ngClass=\"gradientscroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'gradient-able'\" [disabled]=\"null\">\n  <div class=\"navbar-content\">\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n<!--    <app-card [hidHeader]=\"true\" cardClass=\"text-center\">-->\n<!--      <i class=\"feather icon-sunset f-40\"></i>-->\n<!--      <h6 class=\"mt-3\">BackUp</h6>-->\n<!--      <p>Please create backup of your data.</p>-->\n<!--      <a href=\"javascript:\" target=\"_blank\" class=\"btn btn-primary btn-sm text-white m-0\">Backup</a>-->\n<!--    </app-card>-->\n  </div>\n</perfect-scrollbar>\n\n<div *ngIf=\"this.gradientConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n  <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-group/nav-group.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-group/nav-group.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavigationNavContentNavGroupNavGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\n  <ng-container *ngFor=\"let item of item.children\">\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n  </ng-container>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-item/nav-item.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-item/nav-item.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavigationNavContentNavItemNavItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!item.hidden\">\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <ng-template #itemIcon>\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\n  </ng-template>\n  <ng-template #itemBadge>\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n  </ng-template>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/navigation.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/navigation.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutNavigationNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar-wrapper\" [ngClass]=\"{'container': 'horizontal'}\">\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth-signin/auth-signin.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth-signin/auth-signin.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAuthSigninAuthSigninComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"auth-wrapper\" style=\"background : linear-gradient(45deg, #E13E01, #EB7E55)\">\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center text-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card-body\">\n            <img style=\"width: 50%; height: 50%\" src=\"assets/images/12.jpg\" alt=\"\" class=\"img-fluid mb-4\">\n            <h4 class=\"mb-3 f-w-400\">Signin</h4>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\n              </div>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email address\">\n            </div>\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n            </div>\n\n            <div class=\"form-group text-left mt-2\">\n<!--              <div class=\"checkbox checkbox-primary d-inline\">-->\n<!--                <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">-->\n<!--                <label for=\"checkbox-fill-a1\" class=\"cr\"> Save credentials</label>-->\n<!--              </div>-->\n            </div>\n            <button class=\"btn btn-block btn-primary mb-4\" style=\"background-color: #E13E01; border: #EB7E55; height: 50px\" (click)=\"onclick()\">Signin</button>\n<!--            <p class=\"mb-2 text-muted\">Forgot password? <a [routerLink]=\"['/auth/reset-password']\" class=\"f-w-400\">Reset</a></p>-->\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <!-- order-card start -->\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-blue order-card\">\n      <h6 class=\"text-white\">Total SKU's</h6>\n      <h2 class=\"text-right text-white\"><i class=\"feather icon-shopping-cart float-left\"></i><span>486</span></h2>\n      <p class=\"m-b-0\">This Month<span class=\"float-right\">351</span></p>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-green order-card\">\n      <h6 class=\"text-white\">Number of Categories</h6>\n      <h2 class=\"text-right text-white\"><i class=\"feather icon-tag float-left\"></i><span>1641</span></h2>\n      <p class=\"m-b-0\">This Month<span class=\"float-right\">213</span></p>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-yellow order-card\">\n      <h6 class=\"text-white\">Number of Brands</h6>\n      <h2 class=\"text-right text-white\"><i class=\"feather icon-repeat float-left\"></i><span>42,562</span></h2>\n      <p class=\"m-b-0\">This Month<span class=\"float-right\">$5,032</span></p>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-red order-card\">\n      <h6 class=\"text-white\">Number of Manufacturers</h6>\n      <h2 class=\"text-right text-white\"><i class=\"feather icon-award float-left\"></i><span>9,562</span></h2>\n      <p class=\"m-b-0\">This Month<span class=\"float-right\">542</span></p>\n    </app-card>\n  </div>\n  <!-- order-card end -->\n\n  <!-- account-section start -->\n  <div class=\"col-xl-8\">\n    <app-card cardTitle=\"Date Wise Productivity\" [options]=\"false\">\n      <app-apex-chart chartID=\"analytics-apex-mixed-chart\" [chartConfig]=\"this.chartDB.analyticsMixed\"></app-apex-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4\">\n    <app-card [hidHeader]=\"true\" blockClass=\"text-center\">\n      <i class=\"fa fa-envelope-open text-c-red d-block f-40\"></i>\n      <h4 class=\"m-t-20\"><span class=\"text-c-red\">10</span></h4>\n      <p class=\"m-b-20\">Users</p>\n      <button class=\"btn btn-danger btn-sm btn-round\">Manage Users</button>\n    </app-card>\n\n    <app-card [hidHeader]=\"true\" cardClass=\"seo-card\" blockClass=\"seo-statustic\" footerClass=\"seo-chart border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">\n      <i class=\"feather icon-save f-20 text-c-green\"></i>\n      <h5 class=\"mb-1\">64%</h5>\n      <p>Memory</p>\n      <div class=\"app-card-footer\">\n        <app-apex-chart chartID=\"analytics-seo-card-chart\" [chartConfig]=\"this.chartDB.analyticsSeoCard\"></app-apex-chart>\n      </div>\n    </app-card>\n  </div>\n  <!-- account-section end -->\n\n<!--  &lt;!&ndash; conversion-section start &ndash;&gt;-->\n<!--  <div class=\"col-sm-12\">-->\n<!--    <div class=\"row no-gutters\">-->\n<!--      <div class=\"col-md-4 col-xl-2 col-sm-6\">-->\n<!--        <app-card [hidHeader]=\"true\">-->\n<!--          <span>User</span>-->\n<!--          <h3>798</h3>-->\n<!--          <app-apex-chart chartID=\"analytics-apex-user-chart\" [chartConfig]=\"this.chartDB.analyticsUser\"></app-apex-chart>-->\n<!--        </app-card>-->\n<!--      </div>-->\n<!--      <div class=\"col-md-4 col-xl-2 col-sm-6\">-->\n<!--        <app-card [hidHeader]=\"true\">-->\n<!--          <span>Session</span>-->\n<!--          <h3>486</h3>-->\n<!--          <app-apex-chart chartID=\"analytics-apex-session-chart\" [chartConfig]=\"this.chartDB.analyticsSession\"></app-apex-chart>-->\n<!--        </app-card>-->\n<!--      </div>-->\n<!--      <div class=\"col-md-4 col-xl-2 col-sm-6\">-->\n<!--        <app-card [hidHeader]=\"true\">-->\n<!--          <span>Page view</span>-->\n<!--          <h3>9454</h3>-->\n<!--          <app-apex-chart chartID=\"analytics-apex-page-view-chart\" [chartConfig]=\"this.chartDB.analyticsPageView\"></app-apex-chart>-->\n<!--        </app-card>-->\n<!--      </div>-->\n<!--      <div class=\"col-md-4 col-xl-2 col-sm-6\">-->\n<!--        <app-card [hidHeader]=\"true\">-->\n<!--          <span>Page / Session</span>-->\n<!--          <h3>7.15</h3>-->\n<!--          <app-apex-chart chartID=\"analytics-apex-page-session-chart\" [chartConfig]=\"this.chartDB.analyticsPageSession\"></app-apex-chart>-->\n<!--        </app-card>-->\n<!--      </div>-->\n<!--      <div class=\"col-md-4 col-xl-2 col-sm-6\">-->\n<!--        <app-card [hidHeader]=\"true\">-->\n<!--          <span>Avg. Session Time</span>-->\n<!--          <h3>00:04:30</h3>-->\n<!--          <app-apex-chart chartID=\"analytics-apex-avg-session-chart\" [chartConfig]=\"this.chartDB.analyticsAvgSession\"></app-apex-chart>-->\n<!--        </app-card>-->\n<!--      </div>-->\n<!--      <div class=\"col-md-4 col-xl-2 col-sm-6\">-->\n<!--        <app-card [hidHeader]=\"true\">-->\n<!--          <span>Bounce Rate</span>-->\n<!--          <h3>1.55%</h3>-->\n<!--          <app-apex-chart chartID=\"analytics-apex-bounce-rate-chart\" [chartConfig]=\"this.chartDB.analyticsBounceRate\"></app-apex-chart>-->\n<!--        </app-card>-->\n<!--      </div>-->\n<!--    </div>-->\n<!--  </div>-->\n\n<!--  <div class=\"col-lg-4 col-md-12\">-->\n<!--    <app-card [hidHeader]=\"true\" footerClass=\"border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">-->\n<!--      <h6>Conversions</h6>-->\n<!--      <h4 class=\"m-0\">0.85%<span class=\"text-c-blue ml-2\"><i class=\"feather icon-arrow-up\"></i>0.50%</span></h4>-->\n<!--      <span>Purchased</span>-->\n<!--      <div class=\"app-card-footer\">-->\n<!--        <app-apex-chart chartID=\"analytics-conversions-chart-1\" [chartConfig]=\"this.chartDB.analyticsConversions1\"></app-apex-chart>-->\n<!--      </div>-->\n<!--    </app-card>-->\n<!--    <app-card [hidHeader]=\"true\" footerClass=\"border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">-->\n<!--      <h6>Conversions</h6>-->\n<!--      <h4 class=\"m-0\">0.85%<span class=\"text-c-red ml-2\"><i class=\"feather icon-arrow-up\"></i>0.50%</span></h4>-->\n<!--      <span>Purchased</span>-->\n<!--      <div class=\"app-card-footer\">-->\n<!--        <app-apex-chart chartID=\"analytics-conversions-chart-2\" [chartConfig]=\"this.chartDB.analyticsConversions2\"></app-apex-chart>-->\n<!--      </div>-->\n<!--    </app-card>-->\n<!--    <app-card [hidHeader]=\"true\" footerClass=\"border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">-->\n<!--      <h6>Conversions</h6>-->\n<!--      <h4 class=\"m-0\">0.85%<span class=\"text-c-green ml-2\"><i class=\"feather icon-arrow-up\"></i>0.50%</span></h4>-->\n<!--      <span>Purchased</span>-->\n<!--      <div class=\"app-card-footer\">-->\n<!--        <app-apex-chart chartID=\"analytics-conversions-chart-3\" [chartConfig]=\"this.chartDB.analyticsConversions3\"></app-apex-chart>-->\n<!--      </div>-->\n<!--    </app-card>-->\n<!--  </div>-->\n<!--  <div class=\"col-lg-8 col-md-12\">-->\n<!--    <app-card cardTitle=\"Activity Feed\">-->\n<!--      <ul class=\"feed-blog pl-0\">-->\n<!--        <li class=\"active-feed\">-->\n<!--          <div class=\"feed-user-img\">-->\n<!--            <img src=\"assets/images/user/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">-->\n<!--          </div>-->\n<!--          <h6><span class=\"badge badge-danger\">File</span> Eddie uploaded new files: <small class=\"text-muted\">2 hours ago</small></h6>-->\n<!--          <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>-->\n<!--          <div class=\"row\">-->\n<!--            <div class=\"col-auto text-center\">-->\n<!--              <img src=\"assets/images/gallery-grid/img-grd-gal-1.jpg\" alt=\"img\" class=\"img-fluid wid-100\">-->\n<!--              <h6 class=\"m-t-15 m-b-0\">Old Scooter</h6>-->\n<!--              <p class=\"text-muted m-b-0\"><small>PNG-100KB</small></p>-->\n<!--            </div>-->\n<!--            <div class=\"col-auto text-center\">-->\n<!--              <img src=\"assets/images/gallery-grid/img-grd-gal-2.jpg\" alt=\"img\" class=\"img-fluid wid-100\">-->\n<!--              <h6 class=\"m-t-15 m-b-0\">Wall Art</h6>-->\n<!--              <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>-->\n<!--            </div>-->\n<!--            <div class=\"col-auto text-center\">-->\n<!--              <img src=\"assets/images/gallery-grid/img-grd-gal-3.jpg\" alt=\"img\" class=\"img-fluid wid-100\">-->\n<!--              <h6 class=\"m-t-15 m-b-0\">Microphone</h6>-->\n<!--              <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </li>-->\n<!--        <li class=\"diactive-feed\">-->\n<!--          <div class=\"feed-user-img\">-->\n<!--            <img src=\"assets/images/user/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">-->\n<!--          </div>-->\n<!--          <h6><span class=\"badge badge-success\">Task</span> Sarah marked the Pending Review: <span class=\"text-c-green\"> Trash Can Icon Design</span><small class=\"text-muted\"> 2 hours ago</small></h6>-->\n<!--        </li>-->\n<!--        <li class=\"diactive-feed\">-->\n<!--          <div class=\"feed-user-img\">-->\n<!--            <img src=\"assets/images/user/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">-->\n<!--          </div>-->\n<!--          <h6><span class=\"badge badge-primary\">comment</span> abc posted a task: <span class=\"text-c-green\">Design a new Homepage</span> <small class=\"text-muted\">6 hours ago</small></h6>-->\n<!--          <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>-->\n<!--        </li>-->\n<!--      </ul>-->\n<!--    </app-card>-->\n<!--  </div>-->\n<!--  &lt;!&ndash; conversion-section end &ndash;&gt;-->\n\n  <!-- customer overview start -->\n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"Campaign Monitor\" cardClass=\"table-card\" blockClass=\"p-0\">\n      <perfect-scrollbar [style.max-height]=\"'362px'\">\n        <table class=\"table table-hover m-b-0\">\n          <thead>\n            <tr>\n              <th><span>Campaign date</span></th>\n              <th>\n                <span>Click\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Cost\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>CTR\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ARPU\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ECPI\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ROI\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Revenue\n                <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Conversions\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>08-11-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>485\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>769\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,7%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>10:55\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>15-10-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"65\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>523\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>736\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"44\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>4:30\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"68\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>08-08-2017</td>\n              <td>624\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>436\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>756\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"95\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,4%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>9,45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>9:05\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"67\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8.63%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>11-12-2017</td>\n              <td>423\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"54\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>123\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>756\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"75\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,85\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7:45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>05-06-2015</td>\n              <td>465\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"66\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>463\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>456\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>68,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"32\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8:45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"71\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>39.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>08-11-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"43\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>485\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>769\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"69\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,7%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>10:55\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>15-10-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"61\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>523\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>736\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>4:30\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </perfect-scrollbar>\n    </app-card>\n  </div>\n  <!-- customer overview start -->\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesManufacturersAddManufacturerAddManufacturerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n\n    <app-card cardTitle=\"New Manufacturer Information\" [options]=\"false\">\n      <hr>\n      <form action=\"javascript:\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Full Name\">\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n            <label class=\"form-check-label\" for=\"gridCheck\">Active</label>\n          </div>\n        </div>\n        <button class=\"btn btn-warning event-btn m-2\" type=\"submit\" (click)=\"onSubmitLoader()\">\n          <span *ngIf=\"this.submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.submitLoader\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.submitLoader\" class=\"btn-text\">Submit</span>\n        </button>\n      </form>\n    </app-card>\n\n\n    <app-card cardTitle=\"Bulk Upload Manufacturers Information\" [options]=\"false\">\n      <hr>\n\n      <div class=\"input-group cust-file-button\">\n            <div class=\"custom-file\">\n              <input type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile04\" (change)=\"handleFileInput($event)\">\n              <label class=\"custom-file-label\" for=\"inputGroupFile04\">{{filename}}</label>\n            </div>\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"fileUpload()\">Upload</button>\n            </div>\n      </div>\n\n    </app-card>\n\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesManufacturersViewManufacturerViewManufacturerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <app-card cardTitle=\"User Records\" blockClass=\"table-border-style\">\n\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Created</th>\n                            <th>Updated</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let manufacturer of manufacturers\">\n                            <th scope=\"row\">{{manufacturer.id}}</th>\n                            <td>{{manufacturer.name}}</td>\n                            <td>{{manufacturer.createdAt}}</td>\n                            <td>{{manufacturer.updatedAt}}</td>\n                            <td>\n                                <button type=\"button\" class=\"btn btn-outline-primary\" ngbTooltip=\"View User Details\">View</button><span>&nbsp;</span>\n                                <button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"Edit User\">Edit</button>\n                            </td>\n                          </tr>\n\n                        <!-- <tr>\n                            <td>1</td>\n                            <td>Mark</td>\n                            <td>mujeebkalwar.mk@gmail.com</td>\n                            <td>Admin</td>\n                            <td>12/12/2020</td>\n                            <td>12/12/2020</td>\n                            <td>\n                                <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"btn-primary\">Active</button>\n                            </td>\n                        </tr> -->\n                    </tbody>\n                </table>\n            </div>\n\n\n        </app-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/add-user/add-user.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/add-user/add-user.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"New User Information\" [options]=\"false\">\n\n\n      <hr>\n      <form action=\"javascript:\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputEmail4\">Email</label>\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputPassword4\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputName\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Full Name\">\n        </div>\n        <div class=\"form-row\">\n          \n          <div class=\"form-group col-md-4\">\n            <label for=\"inputType\">Type</label>\n            <select id=\"inputType\" class=\"form-control\" placeholder=\"select\">\n              <option>Admin</option>\n              <option>Member</option>\n            </select>\n          </div>\n\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputDescription\">Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"inputDescription\">\n          </div>\n\n        </div>\n        <div class=\"form-group\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n            <label class=\"form-check-label\" for=\"gridCheck\">Active</label>\n          </div>\n        </div>\n        <button class=\"btn btn-warning event-btn m-2\" type=\"submit\" (click)=\"onSubmitLoader()\">\n          <span *ngIf=\"this.submitLoader\" class=\"spinner-grow spinner-grow-sm\" role=\"status\"></span>\n          <span *ngIf=\"this.submitLoader\" class=\"load-text\"> Loading...</span>\n          <span *ngIf=\"!this.submitLoader\" class=\"btn-text\">Submit</span>\n        </button>\n      </form>\n\n\n\n    </app-card>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/view-user/view-user.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/view-user/view-user.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesUsersViewUserViewUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <app-card cardTitle=\"User Records\" blockClass=\"table-border-style\">\n\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th>#</th>\n                            <th>Name</th>\n                            <th>Email</th>\n                            <th>Role</th>\n                            <th>Created</th>\n                            <th>Updated</th>\n                            <th>Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of users\">\n                            <th scope=\"row\">{{user.id}}</th>\n                            <td>{{user.name}}</td>\n                            <td>{{user.email}}</td>\n                            <td>{{user.role}}</td>\n                            <td>{{user.createdAt}}</td>\n                            <td>{{user.updatedAt}}</td>\n                            <td>\n                                <button type=\"button\" class=\"btn btn-outline-primary\" ngbTooltip=\"View User Details\">View</button><span>&nbsp;</span>\n                                <button type=\"button\" class=\"btn btn-outline-secondary\" ngbTooltip=\"Edit User\">Edit</button>\n                            </td>\n                          </tr>\n\n                        <!-- <tr>\n                            <td>1</td>\n                            <td>Mark</td>\n                            <td>mujeebkalwar.mk@gmail.com</td>\n                            <td>Admin</td>\n                            <td>12/12/2020</td>\n                            <td>12/12/2020</td>\n                            <td>\n                                <button type=\"button\" class=\"btn btn-primary\" ngbTooltip=\"btn-primary\">Active</button>\n                            </td>\n                        </tr> -->\n                    </tbody>\n                </table>\n            </div>\n\n\n        </app-card>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsBreadcrumbBreadcrumbComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"this.navigationList\">\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\n      <div class=\"page-block\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-12\">\n            <div class=\"page-header-title\">\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\n            </div>\n            <ul class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a [routerLink]=\"['/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\n                <a [routerLink]=\"['/']\" *ngIf=\"type === 'theme1'\">Home</a>\n              </li>\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\n    <h5 *ngIf=\"!customHeader\">{{ cardTitle }}</h5>\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\n          <i class=\"feather icon-more-horizontal\"></i>\n        </button>\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh($event)\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\n        </ul>\n      </div>\n    </div>\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\n  </div>\n  <div [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </div>\n  <ng-template #subMenuContent>\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </ng-template>\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\n    <ng-content select=\".app-card-footer\"></ng-content>\n  </div>\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/apex-chart/apex-chart.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/apex-chart/apex-chart.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsChartApexChartApexChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"{{this.chartID}}\"></div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-config.ts":
  /*!*******************************!*\
    !*** ./src/app/app-config.ts ***!
    \*******************************/

  /*! exports provided: GradientConfig */

  /***/
  function srcAppAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GradientConfig", function () {
      return GradientConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GradientConfig = function GradientConfig() {
      _classCallCheck(this, GradientConfig);
    };

    GradientConfig.config = {
      layout: 'vertical',
      subLayout: '',
      collapseMenu: false,
      layoutType: 'menu-light',
      headerBackColor: 'header-red',
      // header-green, header-yellow, header-orchidgreen, header-indigogreen, header-darkgreen, header-darkblue
      rtlLayout: false,
      navFixedLayout: true,
      headerFixedLayout: true,
      boxLayout: false
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/auth-signin/auth-signin.component */
    "./src/app/pages/auth-signin/auth-signin.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/users/add-user/add-user.component */
    "./src/app/pages/users/add-user/add-user.component.ts");
    /* harmony import */


    var _pages_users_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/users/view-user/view-user.component */
    "./src/app/pages/users/view-user/view-user.component.ts");
    /* harmony import */


    var _pages_manufacturers_add_manufacturer_add_manufacturer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/manufacturers/add-manufacturer/add-manufacturer.component */
    "./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.ts");
    /* harmony import */


    var _pages_manufacturers_view_manufacturer_view_manufacturer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/manufacturers/view-manufacturer/view-manufacturer.component */
    "./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.ts");

    var routes = [{
      path: '',
      component: _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]
    }, {
      path: 'login',
      component: _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_4__["AuthSigninComponent"]
    }, {
      path: 'public',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      children: [{
        path: '',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
      }, {
        path: 'add-user',
        component: _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"]
      }, {
        path: 'view-user',
        component: _pages_users_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_7__["ViewUserComponent"]
      }, {
        path: 'add-manufacturer',
        component: _pages_manufacturers_add_manufacturer_add_manufacturer_component__WEBPACK_IMPORTED_MODULE_8__["AddManufacturerComponent"]
      }, {
        path: 'view-manufacturer',
        component: _pages_manufacturers_view_manufacturer_view_manufacturer_component__WEBPACK_IMPORTED_MODULE_9__["ViewManufacturerComponent"]
      }]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layout/navigation/navigation.component */
    "./src/app/layout/navigation/navigation.component.ts");
    /* harmony import */


    var _layout_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layout/navigation/nav-content/nav-content.component */
    "./src/app/layout/navigation/nav-content/nav-content.component.ts");
    /* harmony import */


    var _layout_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layout/navigation/nav-content/nav-group/nav-group.component */
    "./src/app/layout/navigation/nav-content/nav-group/nav-group.component.ts");
    /* harmony import */


    var _layout_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./layout/navigation/nav-content/nav-collapse/nav-collapse.component */
    "./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
    /* harmony import */


    var _layout_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layout/navigation/nav-content/nav-item/nav-item.component */
    "./src/app/layout/navigation/nav-content/nav-item/nav-item.component.ts");
    /* harmony import */


    var _layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./layout/nav-bar/nav-bar.component */
    "./src/app/layout/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _layout_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./layout/nav-bar/nav-left/nav-left.component */
    "./src/app/layout/nav-bar/nav-left/nav-left.component.ts");
    /* harmony import */


    var _layout_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./layout/nav-bar/nav-left/nav-search/nav-search.component */
    "./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.ts");
    /* harmony import */


    var _layout_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./layout/nav-bar/nav-right/nav-right.component */
    "./src/app/layout/nav-bar/nav-right/nav-right.component.ts");
    /* harmony import */


    var _layout_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./layout/nav-bar/nav-right/chat-user-list/chat-user-list.component */
    "./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts");
    /* harmony import */


    var _layout_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./layout/nav-bar/nav-right/chat-user-list/friend/friend.component */
    "./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.ts");
    /* harmony import */


    var _layout_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./layout/nav-bar/nav-right/chat-msg/chat-msg.component */
    "./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.ts");
    /* harmony import */


    var _layout_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./layout/configuration/configuration.component */
    "./src/app/layout/configuration/configuration.component.ts");
    /* harmony import */


    var _layout_navigation_navigation__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./layout/navigation/navigation */
    "./src/app/layout/navigation/navigation.ts");
    /* harmony import */


    var _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/auth-signin/auth-signin.component */
    "./src/app/pages/auth-signin/auth-signin.component.ts");
    /* harmony import */


    var _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/users/add-user/add-user.component */
    "./src/app/pages/users/add-user/add-user.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_users_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/users/view-user/view-user.component */
    "./src/app/pages/users/view-user/view-user.component.ts");
    /* harmony import */


    var _pages_manufacturers_add_manufacturer_add_manufacturer_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/manufacturers/add-manufacturer/add-manufacturer.component */
    "./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.ts");
    /* harmony import */


    var _pages_manufacturers_view_manufacturer_view_manufacturer_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/manufacturers/view-manufacturer/view-manufacturer.component */
    "./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.ts"); //Bootstrap
    //Custom Modules
    //Custom Components
    //Custom Pages


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _layout_layout_component__WEBPACK_IMPORTED_MODULE_10__["LayoutComponent"], _layout_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"], _layout_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_12__["NavContentComponent"], _layout_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_13__["NavGroupComponent"], _layout_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_14__["NavCollapseComponent"], _layout_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_15__["NavItemComponent"], _layout_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_16__["NavBarComponent"], _layout_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_17__["NavLeftComponent"], _layout_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_18__["NavSearchComponent"], _layout_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_19__["NavRightComponent"], _layout_nav_bar_nav_right_chat_user_list_chat_user_list_component__WEBPACK_IMPORTED_MODULE_20__["ChatUserListComponent"], _layout_nav_bar_nav_right_chat_user_list_friend_friend_component__WEBPACK_IMPORTED_MODULE_21__["FriendComponent"], _layout_nav_bar_nav_right_chat_msg_chat_msg_component__WEBPACK_IMPORTED_MODULE_22__["ChatMsgComponent"], _layout_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_23__["ConfigurationComponent"], //Components
      _pages_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_25__["AuthSigninComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"], _pages_users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_26__["AddUserComponent"], _pages_users_view_user_view_user_component__WEBPACK_IMPORTED_MODULE_28__["ViewUserComponent"], _pages_manufacturers_add_manufacturer_add_manufacturer_component__WEBPACK_IMPORTED_MODULE_29__["AddManufacturerComponent"], _pages_manufacturers_view_manufacturer_view_manufacturer_component__WEBPACK_IMPORTED_MODULE_30__["ViewManufacturerComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"]],
      providers: [_layout_navigation_navigation__WEBPACK_IMPORTED_MODULE_24__["NavigationItem"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/fack-db/chart-data.ts":
  /*!***************************************!*\
    !*** ./src/app/fack-db/chart-data.ts ***!
    \***************************************/

  /*! exports provided: ChartDB */

  /***/
  function srcAppFackDbChartDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDB", function () {
      return ChartDB;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ChartDB = function ChartDB() {
      _classCallCheck(this, ChartDB);
    };

    ChartDB.analyticsMixed = {
      chart: {
        height: 320,
        type: 'line'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          endingShape: 'rounded'
        }
      },
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Repeated',
        type: 'line',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 23]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      stroke: {
        width: [0, 4, 4],
        dashArray: [0, 10, 0],
        curve: 'smooth'
      },
      colors: ['#73b4ff', '#ff869a', '#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['#4099ff', '#ff5370', '#2ed8b6'],
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.95,
          stops: [0, 100]
        }
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog'
        }
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]
    };
    ChartDB.analyticsSeoCard = {
      chart: {
        type: 'area',
        height: 120,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#2ed8b6'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#2ed8b6'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.9,
          opacityTo: 0.5,
          stops: [0, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        data: [40, 25, 60, 50, 75, 60]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.analyticsUser = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [{
        data: [3, 0, 1, 2, 1, 1, 2]
      }],
      yaxis: {
        min: -2,
        max: 5
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#ffb64d']
    };
    ChartDB.analyticsSession = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [{
        data: [2, 1, 2, 1, 1, 3, 0]
      }],
      yaxis: {
        min: -3,
        max: 5
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#dc6788']
    };
    ChartDB.analyticsPageView = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [{
        data: [3, 0, 1, 2, 1, 1, 2]
      }],
      yaxis: {
        min: -3,
        max: 5
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#FF5370']
    };
    ChartDB.analyticsPageSession = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [{
        data: [2, 1, 2, 1, 1, 3, 0]
      }],
      yaxis: {
        min: -3,
        max: 5
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#7759de']
    };
    ChartDB.analyticsAvgSession = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [{
        data: [3, 0, 1, 2, 1, 1, 2]
      }],
      yaxis: {
        min: -3,
        max: 5
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#4099ff']
    };
    ChartDB.analyticsBounceRate = {
      chart: {
        type: 'line',
        height: 30,
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        curve: 'straight',
        width: 2
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 0.5,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      series: [{
        data: [2, 1, 2, 1, 1, 3, 0]
      }],
      yaxis: {
        min: -3,
        max: 5
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      },
      colors: ['#2ed8b6']
    };
    ChartDB.analyticsConversions1 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#73b4ff'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0,
          gradientToColors: ['#4099ff'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.99,
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.analyticsConversions2 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#59e0c5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0,
          gradientToColors: ['#2ed8b6'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.99,
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.analyticsConversions3 = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#ff869a'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0,
          gradientToColors: ['#ff5370'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.99,
          stops: [0, 100]
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.saleAnnualProfit = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      stroke: {
        width: [0, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      colors: ['#4099ff', '#2ed8b6'],
      series: [{
        name: 'Facebook',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'Dribbble',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
      fill: {
        opacity: [0.85, 1]
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function formatter(y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' views';
            }

            return y;
          }
        }
      },
      legend: {
        labels: {
          useSeriesColors: true
        },
        markers: {
          customHTML: [function () {
            return '';
          }, function () {
            return '';
          }]
        }
      }
    };
    ChartDB.saleSatisfaction = {
      chart: {
        height: 260,
        type: 'pie'
      },
      series: [66, 50, 40, 30],
      labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
      legend: {
        show: true,
        offsetY: 50
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#4099ff'
        }
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            height: 320
          },
          legend: {
            position: 'bottom',
            offsetY: 0
          }
        }
      }]
    };
    ChartDB.chartStudent = {
      chart: {
        height: 200,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        curve: 'smooth'
      },
      series: [{
        name: 'Arts',
        data: [20, 50, 30, 60, 30, 50, 40]
      }, {
        name: 'Commerce',
        data: [60, 30, 65, 45, 67, 35, 68]
      }, {
        name: 'Science',
        data: [40, 20, 50, 15, 40, 65, 20]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000']
      },
      colors: ['#73b4ff', '#59e0c5', '#ff869a'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#2ed8b6', '#ff5370'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      markers: {
        size: 5,
        colors: ['#4099ff', '#2ed8b6', '#ff5370'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      yaxis: {
        min: 10,
        max: 70
      }
    };
    ChartDB.chartEmail = {
      chart: {
        height: 200,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      series: [85.7, 77.56, 20.9],
      colors: ['#4099ff', '#ff5370', '#2ed8b6'],
      labels: ['Send', 'Open', 'Bounced'],
      legend: {
        show: true,
        position: 'bottom'
      }
    };
    ChartDB.chartSeoCard = {
      chart: {
        type: 'area',
        height: 120,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#4099ff'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.9,
          opacityTo: 0.5,
          stops: [0, 100, 100, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        data: [40, 25, 60, 50, 75, 60]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.chartUniqueVisitor = {
      chart: {
        type: 'bar',
        height: 220,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#fff'],
      plotOptions: {
        bar: {
          color: '#fff',
          columnWidth: '80%'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: ['#fff'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.65,
          stops: [0, 100]
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        },
        labels: {
          show: true,
          style: {
            colors: '#fff'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            color: '#fff'
          }
        }
      },
      grid: {
        borderColor: '#ffffff3b'
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Click ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.chartStatistics = {
      chart: {
        height: 195,
        type: 'line',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      series: [{
        name: 'Arts',
        data: [20, 50, 30, 60, 30, 65, 30]
      }, {
        name: 'Science',
        data: [40, 20, 50, 15, 45, 30, 60]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000']
      },
      colors: ['#73b4ff', '#ff869a'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          gradientToColors: ['#4099ff', '#ff5370'],
          shadeIntensity: 0.5,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      markers: {
        size: 5,
        colors: ['#4099ff', '#ff5370'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      yaxis: {
        min: 10,
        max: 70
      }
    };
    ChartDB.chartProcessCompliance = {
      chart: {
        height: 200,
        type: 'bar',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#4099ff', '#2ed8b6', '#ff5370'],
      plotOptions: {
        bar: {
          columnWidth: '55%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      series: [{
        name: 'Requests',
        data: [66.6, 29.7, 32.8]
      }],
      xaxis: {
        categories: ['Desktop', 'Tablet', 'Mobile']
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: ['#4099ff', '#2ed8b6', '#ff5370'],
          inverseColors: true,
          opacityFrom: 0.99,
          opacityTo: 0.65,
          stops: [0, 100]
        }
      }
    };
    ChartDB.chartUser1 = {
      chart: {
        height: 150,
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'straight'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#4099ff'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.9,
          opacityTo: 0.5,
          stops: [0, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          show: true,
          maxWidth: 20
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      colors: ['#4099ff'],
      series: [{
        name: 'Hour.',
        data: [0, 30, 10, 45, 30, 55, 30, 50]
      }],
      grid: {
        row: {
          opacity: 0.5
        }
      }
    };
    ChartDB.chartUser2 = {
      chart: {
        height: 150,
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'straight'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#2ed8b6'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.9,
          opacityTo: 0.5,
          stops: [0, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          show: true,
          maxWidth: 20
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      colors: ['#2ed8b6'],
      series: [{
        name: 'Hour.',
        data: [0, 30, 10, 45, 30, 55, 30, 50]
      }],
      grid: {
        row: {
          opacity: 0.5
        }
      }
    };
    ChartDB.chartUser3 = {
      chart: {
        height: 150,
        type: 'area',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'straight'
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ffb64d'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 0.9,
          opacityTo: 0.5,
          stops: [0, 100, 100, 100]
        }
      },
      yaxis: {
        labels: {
          show: true,
          maxWidth: 20
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      colors: ['#ffb64d'],
      series: [{
        name: 'Hour.',
        data: [0, 30, 10, 45, 30, 55, 30, 50]
      }],
      grid: {
        row: {
          opacity: 0.5
        }
      }
    };
    ChartDB.chartAmount1 = {
      chart: {
        type: 'area',
        height: 90,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [65, 45, 60, 40, 80]
      }],
      yaxis: {
        min: 0,
        max: 80
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.chartAmount2 = {
      chart: {
        type: 'area',
        height: 90,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [80, 40, 60, 45, 65]
      }],
      yaxis: {
        min: 0,
        max: 80
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.chartAmount3 = {
      chart: {
        type: 'area',
        height: 90,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [65, 45, 60, 40, 80]
      }],
      yaxis: {
        min: 0,
        max: 80
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.chartAmount4 = {
      chart: {
        type: 'area',
        height: 90,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'solid',
        opacity: 1
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [80, 40, 60, 45, 65]
      }],
      yaxis: {
        min: 0,
        max: 80
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.completedTicketCAC = {
      chart: {
        type: 'line',
        height: 80,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'smooth'
      },
      series: [{
        data: [45, 66, 41, 89, 25, 44, 9, 54]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.transactions1CAC = {
      chart: {
        type: 'bar',
        height: 60,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Inbound';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.transactions2CAC = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FF5370'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }],
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Outbound';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.storageCAC = {
      chart: {
        type: 'area',
        height: 95,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff', '#00bcd4'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'Storage',
        data: [100, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'Bandwidth',
        data: [41, 109, 45, 109, 34, 52, 41]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.accountCAC = {
      chart: {
        type: 'area',
        height: 215,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff', '#0e9e4a', '#FF5370'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [20, 90, 65, 85, 20, 80, 30]
      }, {
        name: 'series2',
        data: [70, 30, 40, 15, 60, 40, 95]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.percentageCAC = {
      chart: {
        height: 120,
        type: 'bar',
        sparkline: {
          enabled: true
        }
      },
      colors: ['#4099ff', '#0e9e4a', '#FF5370'],
      plotOptions: {
        bar: {
          columnWidth: '55%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 0
      },
      series: [{
        name: 'Requests',
        data: [66.6, 29.7, 32.8]
      }],
      xaxis: {
        categories: ['Desktop', 'Tablet', 'Mobile']
      }
    };
    ChartDB.deviceCAC = {
      chart: {
        height: 135,
        type: 'donut',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [66.6, 29.7, 38.6],
      labels: ['Desktop', 'Mobile', 'Tablet'],
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      legend: {
        show: false
      }
    };
    ChartDB.average1CAC = {
      chart: {
        type: 'area',
        height: 145,
        width: '100%',
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.8,
          opacityTo: 0.4,
          stops: [0, 80, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [40, 60, 35, 55, 35, 75, 50]
      }],
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.average2CAC = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#0e9e4a'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.8,
          opacityTo: 0.4,
          stops: [0, 90, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [40, 55, 35, 75, 50, 90, 50]
      }],
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.average3CAC = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.4,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [40, 60, 35, 70, 50]
      }],
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.average4CAC = {
      chart: {
        type: 'area',
        height: 145,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FFF'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.4,
          stops: [0, 100]
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [65, 45, 60, 40, 80]
      }],
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '$';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.conversionsBarCAC = {
      chart: {
        type: 'bar',
        height: 85,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.conversionsCAC = {
      chart: {
        type: 'bar',
        height: 65,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#00acc1'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.customerCAC = {
      chart: {
        height: 200,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['New', 'Return', 'Custom'],
      series: [76.7, 15, 30],
      legend: {
        show: false
      },
      grid: {
        padding: {
          top: 20,
          right: 0,
          bottom: 0,
          left: 0
        }
      },
      colors: ['#4099ff', '#0e9e4a', '#FF5370']
    };
    ChartDB.dailyVisitorAACC = {
      chart: {
        type: 'area',
        height: 285
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'visitor',
        data: [[1327359600000, 30], [1327446000000, 31], [1327532400000, 31], [1327618800000, 31], [1327878000000, 31], [1327964400000, 30], [1328050800000, 31], [1328137200000, 31], [1328223600000, 31], [1328482800000, 31], [1328569200000, 32], [1328655600000, 32], [1328742000000, 32], [1328828400000, 32], [1329087600000, 32], [1329174000000, 32], [1329260400000, 32], [1329346800000, 32], [1329433200000, 32], [1329778800000, 32], [1329865200000, 32], [1329951600000, 32], [1330038000000, 33], [1330297200000, 33], [1330383600000, 33], [1330470000000, 32], [1330556400000, 33], [1330642800000, 33], [1330902000000, 33], [1330988400000, 31], [1331074800000, 32], [1331161200000, 33], [1331247600000, 33], [1331506800000, 33], [1331593200000, 34], [1331679600000, 33], [1331766000000, 34], [1331852400000, 33], [1332111600000, 34], [1332198000000, 33], [1332284400000, 33], [1332370800000, 33], [1332457200000, 33], [1332712800000, 34], [1332799200000, 34], [1332885600000, 34], [1332972000000, 34], [1333058400000, 34], [1333317600000, 34], [1333404000000, 34], [1333490400000, 33], [1333576800000, 33], [1333922400000, 33], [1334008800000, 32], [1334095200000, 33], [1334181600000, 33], [1334268000000, 33], [1334527200000, 32], [1334613600000, 33], [1334700000000, 33], [1334786400000, 32], [1334872800000, 33], [1335132000000, 32], [1335218400000, 32], [1335304800000, 33], [1335391200000, 33], [1335477600000, 33], [1335736800000, 33], [1335823200000, 33], [1335909600000, 33], [1335996000000, 33], [1336082400000, 32], [1336341600000, 32], [1336428000000, 32], [1336514400000, 32], [1336600800000, 31], [1336687200000, 32], [1336946400000, 32], [1337032800000, 32], [1337119200000, 32], [1337205600000, 32], [1337292000000, 31], [1337551200000, 32], [1337637600000, 32], [1337724000000, 32], [1337810400000, 31], [1337896800000, 31], [1338242400000, 32], [1338328800000, 31], [1338415200000, 31], [1338501600000, 29], [1338760800000, 30], [1338847200000, 30], [1338933600000, 31], [1339020000000, 31], [1339106400000, 31], [1339365600000, 31], [1339452000000, 31], [1339538400000, 31], [1339624800000, 31], [1339711200000, 32], [1339970400000, 32], [1340056800000, 32], [1340143200000, 31], [1340229600000, 31], [1340316000000, 31], [1340575200000, 30], [1340661600000, 31], [1340748000000, 31], [1340834400000, 31], [1340920800000, 32], [1341180000000, 32], [1341266400000, 32], [1341439200000, 32], [1341525600000, 31], [1341784800000, 30], [1341871200000, 30], [1341957600000, 30], [1342044000000, 30], [1342130400000, 30], [1342389600000, 30], [1342476000000, 30], [1342562400000, 31], [1342648800000, 31], [1342735200000, 31], [1342994400000, 30], [1343080800000, 30], [1343167200000, 30], [1343253600000, 30], [1343340000000, 31], [1343599200000, 31], [1343685600000, 30], [1343772000000, 30], [1343858400000, 30], [1343944800000, 32], [1344204000000, 32], [1344290400000, 32], [1344376800000, 32], [1344463200000, 32], [1344549600000, 32], [1344808800000, 32], [1344895200000, 32], [1344981600000, 32], [1345068000000, 33], [1345154400000, 33], [1345413600000, 33], [1345500000000, 33], [1345586400000, 33], [1345672800000, 33], [1345759200000, 32], [1346018400000, 32], [1346104800000, 32], [1346191200000, 31], [1346277600000, 31], [1346364000000, 31], [1346709600000, 31], [1346796000000, 32], [1346882400000, 32], [1346968800000, 32], [1347228000000, 32], [1347314400000, 32], [1347400800000, 32], [1347487200000, 32], [1347573600000, 33], [1347832800000, 33], [1347919200000, 32], [1348005600000, 33], [1348092000000, 34], [1348178400000, 33], [1348437600000, 33], [1348524000000, 32], [1348610400000, 32], [1348696800000, 32], [1348783200000, 32], [1349042400000, 32], [1349128800000, 32], [1349215200000, 32], [1349301600000, 32], [1349388000000, 32], [1349647200000, 32], [1349733600000, 31], [1349820000000, 31], [1349906400000, 31], [1349992800000, 31], [1350252000000, 32], [1350338400000, 33], [1350424800000, 33], [1350511200000, 33], [1350597600000, 33], [1350856800000, 33], [1350943200000, 33], [1351029600000, 33], [1351116000000, 33], [1351202400000, 34], [1351638000000, 34], [1351724400000, 34], [1351810800000, 34], [1352070000000, 34], [1352156400000, 34], [1352242800000, 33], [1352329200000, 32], [1352415600000, 32], [1352674800000, 32], [1352761200000, 32], [1352847600000, 32], [1352934000000, 32], [1353020400000, 32], [1353279600000, 32], [1353366000000, 32], [1353452400000, 32], [1353625200000, 33], [1353884400000, 33], [1353970800000, 33], [1354057200000, 33], [1354143600000, 34], [1354230000000, 34], [1354489200000, 34], [1354575600000, 35], [1354662000000, 35], [1354748400000, 35], [1354834800000, 35], [1355094000000, 35], [1355180400000, 35], [1355266800000, 35], [1355353200000, 35], [1355439600000, 37], [1355698800000, 37], [1355785200000, 37], [1355871600000, 38], [1355958000000, 37], [1356044400000, 37], [1356303600000, 37], [1356476400000, 37], [1356562800000, 37], [1356649200000, 36], [1356908400000, 37], [1357081200000, 38], [1357167600000, 37], [1357254000000, 38], [1357513200000, 37], [1357599600000, 38], [1357686000000, 38], [1357772400000, 38], [1357858800000, 38], [1358118000000, 38], [1358204400000, 38], [1358290800000, 37], [1358377200000, 37], [1358463600000, 37], [1358809200000, 37], [1358895600000, 38], [1358982000000, 38], [1359068400000, 38], [1359327600000, 38], [1359414000000, 38], [1359500400000, 37], [1359586800000, 37], [1359673200000, 38], [1359932400000, 38], [1360018800000, 38], [1360105200000, 38], [1360191600000, 38], [1360278000000, 39], [1360537200000, 38], [1360623600000, 38], [1360710000000, 38], [1360796400000, 38], [1360882800000, 38], [1361228400000, 38], [1361314800000, 38], [1361401200000, 38], [1361487600000, 38], [1361746800000, 38], [1361833200000, 38], [1361919600000, 39]]
      }],
      stroke: {
        curve: 'straight',
        width: 2
      },
      markers: {
        size: 0,
        style: 'hollow'
      },
      colors: ['#4099ff'],
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
        labels: {
          offsetY: 5
        }
      },
      grid: {
        borderColor: '#cccccc42',
        padding: {
          left: 0,
          right: 0,
          bottom: 0
        }
      },
      yaxis: {
        show: true,
        labels: {
          show: true,
          align: 'left',
          offsetX: -18,
          maxWidth: 40
        }
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          // shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.0,
          stops: [0, 100]
        }
      }
    };
    ChartDB.horizontalBarCAC = {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#4099ff', '#0e9e4a', '#FF5370'],
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      series: [{
        name: 'India',
        data: [44, 55, 41, 64, 22]
      }, {
        name: 'Japan',
        data: [53, 32, 33, 52, 13]
      }, {
        name: 'London',
        data: [44, 33, 52, 13, 22]
      }],
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005]
      }
    };
    ChartDB.marketCAC = {
      chart: {
        height: 200,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#E0291D', '#3C5A99', '#42C0FB'],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      series: [{
        name: 'Youtube',
        data: [44, 50, 41, 67, 22, 43, 44, 50, 41, 52, 22, 43]
      }, {
        name: 'Facebook',
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
      }, {
        name: 'Twitter',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT']
      },
      legend: {
        show: false
      },
      fill: {
        opacity: 1
      }
    };
    ChartDB.revenueCAC = {
      chart: {
        height: 223,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      labels: ['Target', 'Last week', 'Last day'],
      series: [1258, 975, 500],
      legend: {
        show: false
      },
      colors: ['#00acc1', '#FFB64D', '#4099ff']
    };
    ChartDB.saleCAC = {
      chart: {
        type: 'bar',
        height: 220,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      plotOptions: {
        bar: {
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.siteCAC = {
      chart: {
        type: 'line',
        height: 150,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [{
        data: [135, 187, 180, 222, 185, 195, 158]
      }],
      yaxis: {
        min: 100
      },
      colors: ['#4099ff']
    };
    ChartDB.supportCAC = {
      chart: {
        type: 'area',
        height: 95,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Ticket ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.timeUserCAC = {
      chart: {
        height: 400,
        type: 'heatmap'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      series: [{
        name: 'Metric1',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric2',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric3',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric4',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric5',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric6',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric7',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric8',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric9',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric10',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric11',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric12',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric13',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric14',
        data: generateDataSabraThat(12, {
          min: 0,
          max: 90
        })
      }]
    };
    ChartDB.trafficCAC = {
      chart: {
        height: 300,
        type: 'donut'
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
      colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370', '#7759de'],
      labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
      legend: {
        show: true,
        position: 'bottom'
      }
    };
    ChartDB.timeCAC = {
      chart: {
        height: 225,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        curve: 'straight'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      colors: ['#0e9e4a'],
      series: [{
        name: 'Hour.',
        data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
      }],
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'],
          opacity: 0.5
        }
      }
    };
    ChartDB.trafficMonitorCAC = {
      chart: {
        type: 'bar',
        height: 400,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: true
      },
      colors: ['#4099ff'],
      plotOptions: {
        bar: {
          colors: {
            ranges: [{
              from: 0,
              to: 15,
              color: '#FF5370'
            }, {
              from: 16,
              to: 30,
              color: '#FFB64D'
            }, {
              from: 31,
              to: 50,
              color: '#4099ff'
            }, {
              from: 51,
              to: 100,
              color: '#0e9e4a'
            }]
          },
          columnWidth: '80%'
        }
      },
      series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        }
      },
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Click ';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.typeCAC = {
      chart: {
        height: 235,
        type: 'donut'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%'
          }
        }
      },
      labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
      series: [76.7, 15, 30],
      legend: {
        show: false
      },
      colors: ['#FF5370', '#FFB64D', '#00acc1']
    };
    ChartDB.view1CAC = {
      chart: {
        type: 'area',
        height: 87,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#FF5370'],
      stroke: {
        curve: 'straight',
        width: 3
      },
      series: [{
        name: 'series1',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Page view:';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.view2CAC = {
      chart: {
        type: 'area',
        height: 87,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#00acc1'],
      stroke: {
        curve: 'smooth',
        width: 3
      },
      series: [{
        name: 'series1',
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return 'Users:';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.line1CAC = {
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
        width: 2
      },
      stroke: {
        curve: 'straight'
      },
      colors: ['#4099ff'],
      series: [{
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    };
    ChartDB.line3CAC = {
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
      },
      colors: ['#0e9e4a', '#FFB64D', '#FF5370'],
      series: [{
        name: 'Session Duration',
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      }, {
        name: 'Page Views',
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      }, {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }],
      title: {
        text: 'Page Statistics',
        align: 'left'
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan', '10 Jan', '11 Jan', '12 Jan']
      },
      tooltip: {
        y: [{
          title: {
            formatter: function formatter(val) {
              return val + ' (mins)';
            }
          }
        }, {
          title: {
            formatter: function formatter(val) {
              return val + ' per session';
            }
          }
        }, {
          title: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }]
      },
      grid: {
        borderColor: '#f1f1f1'
      }
    };
    ChartDB.area1CAC = {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      colors: ['#FFB64D', '#FF5370'],
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00']
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };
    ChartDB.bar1CAC = {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#0e9e4a', '#4099ff', '#FF5370'],
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52]
      }],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
    ChartDB.bar2CAC = {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT']
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
    ChartDB.bar3CAC = {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top'
          }
        }
      },
      colors: ['#4099ff', '#0e9e4a'],
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007]
      }
    };
    ChartDB.bar4CAC = {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        stackType: '100%'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      colors: ['#4099ff', '#00acc1', '#0e9e4a', '#FFB64D', '#FF5370'],
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      series: [{
        name: 'Marine Sprite',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Striking Calf',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Tank Picture',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Bucket Slope',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Reborn Kid',
        data: [25, 12, 19, 32, 25, 24, 10]
      }],
      title: {
        text: '100% Stacked Bar'
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014]
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return val + 'K';
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };
    ChartDB.mixed1CAC = {
      chart: {
        height: 350,
        type: 'line'
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      stroke: {
        width: [0, 4]
      },
      colors: ['#4099ff', '#FF5370'],
      title: {
        text: 'Traffic Sources'
      },
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog'
        }
      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]
    };
    ChartDB.mixed2CAC = {
      chart: {
        height: 350,
        type: 'line',
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
      },
      plotOptions: {
        bar: {
          columnWidth: '50%'
        }
      },
      colors: ['#FF5370', '#4099ff', '#FFB64D'],
      series: [{
        name: 'Facebook',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
      }, {
        name: 'Vine',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
      }, {
        name: 'Dribbble',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
      }],
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        min: 0
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function formatter(y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' views';
            }

            return y;
          }
        }
      },
      legend: {
        labels: {
          useSeriesColors: true
        },
        markers: {
          customHTML: [function () {
            return '';
          }, function () {
            return '';
          }, function () {
            return '';
          }]
        }
      }
    };
    ChartDB.candlestickCAC = {
      chart: {
        height: 350,
        type: 'candlestick'
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        data: [{
          x: new Date(1538778600000),
          y: [6629.81, 6650.5, 6623.04, 6633.33]
        }, {
          x: new Date(1538780400000),
          y: [6632.01, 6643.59, 6620, 6630.11]
        }, {
          x: new Date(1538782200000),
          y: [6630.71, 6648.95, 6623.34, 6635.65]
        }, {
          x: new Date(1538784000000),
          y: [6635.65, 6651, 6629.67, 6638.24]
        }, {
          x: new Date(1538785800000),
          y: [6638.24, 6640, 6620, 6624.47]
        }, {
          x: new Date(1538787600000),
          y: [6624.53, 6636.03, 6621.68, 6624.31]
        }, {
          x: new Date(1538789400000),
          y: [6624.61, 6632.2, 6617, 6626.02]
        }, {
          x: new Date(1538791200000),
          y: [6627, 6627.62, 6584.22, 6603.02]
        }, {
          x: new Date(1538793000000),
          y: [6605, 6608.03, 6598.95, 6604.01]
        }, {
          x: new Date(1538794800000),
          y: [6604.5, 6614.4, 6602.26, 6608.02]
        }, {
          x: new Date(1538796600000),
          y: [6608.02, 6610.68, 6601.99, 6608.91]
        }, {
          x: new Date(1538798400000),
          y: [6608.91, 6618.99, 6608.01, 6612]
        }, {
          x: new Date(1538800200000),
          y: [6612, 6615.13, 6605.09, 6612]
        }, {
          x: new Date(1538802000000),
          y: [6612, 6624.12, 6608.43, 6622.95]
        }, {
          x: new Date(1538803800000),
          y: [6623.91, 6623.91, 6615, 6615.67]
        }, {
          x: new Date(1538805600000),
          y: [6618.69, 6618.74, 6610, 6610.4]
        }, {
          x: new Date(1538807400000),
          y: [6611, 6622.78, 6610.4, 6614.9]
        }, {
          x: new Date(1538809200000),
          y: [6614.9, 6626.2, 6613.33, 6623.45]
        }, {
          x: new Date(1538811000000),
          y: [6623.48, 6627, 6618.38, 6620.35]
        }, {
          x: new Date(1538812800000),
          y: [6619.43, 6620.35, 6610.05, 6615.53]
        }, {
          x: new Date(1538814600000),
          y: [6615.53, 6617.93, 6610, 6615.19]
        }, {
          x: new Date(1538816400000),
          y: [6615.19, 6621.6, 6608.2, 6620]
        }, {
          x: new Date(1538818200000),
          y: [6619.54, 6625.17, 6614.15, 6620]
        }, {
          x: new Date(1538820000000),
          y: [6620.33, 6634.15, 6617.24, 6624.61]
        }, {
          x: new Date(1538821800000),
          y: [6625.95, 6626, 6611.66, 6617.58]
        }, {
          x: new Date(1538823600000),
          y: [6619, 6625.97, 6595.27, 6598.86]
        }, {
          x: new Date(1538825400000),
          y: [6598.86, 6598.88, 6570, 6587.16]
        }, {
          x: new Date(1538827200000),
          y: [6588.86, 6600, 6580, 6593.4]
        }, {
          x: new Date(1538829000000),
          y: [6593.99, 6598.89, 6585, 6587.81]
        }, {
          x: new Date(1538830800000),
          y: [6587.81, 6592.73, 6567.14, 6578]
        }, {
          x: new Date(1538832600000),
          y: [6578.35, 6581.72, 6567.39, 6579]
        }, {
          x: new Date(1538834400000),
          y: [6579.38, 6580.92, 6566.77, 6575.96]
        }, {
          x: new Date(1538836200000),
          y: [6575.96, 6589, 6571.77, 6588.92]
        }, {
          x: new Date(1538838000000),
          y: [6588.92, 6594, 6577.55, 6589.22]
        }, {
          x: new Date(1538839800000),
          y: [6589.3, 6598.89, 6589.1, 6596.08]
        }, {
          x: new Date(1538841600000),
          y: [6597.5, 6600, 6588.39, 6596.25]
        }, {
          x: new Date(1538843400000),
          y: [6598.03, 6600, 6588.73, 6595.97]
        }, {
          x: new Date(1538845200000),
          y: [6595.97, 6602.01, 6588.17, 6602]
        }, {
          x: new Date(1538847000000),
          y: [6602, 6607, 6596.51, 6599.95]
        }, {
          x: new Date(1538848800000),
          y: [6600.63, 6601.21, 6590.39, 6591.02]
        }, {
          x: new Date(1538850600000),
          y: [6591.02, 6603.08, 6591, 6591]
        }, {
          x: new Date(1538852400000),
          y: [6591, 6601.32, 6585, 6592]
        }, {
          x: new Date(1538854200000),
          y: [6593.13, 6596.01, 6590, 6593.34]
        }, {
          x: new Date(1538856000000),
          y: [6593.34, 6604.76, 6582.63, 6593.86]
        }, {
          x: new Date(1538857800000),
          y: [6593.86, 6604.28, 6586.57, 6600.01]
        }, {
          x: new Date(1538859600000),
          y: [6601.81, 6603.21, 6592.78, 6596.25]
        }, {
          x: new Date(1538861400000),
          y: [6596.25, 6604.2, 6590, 6602.99]
        }, {
          x: new Date(1538863200000),
          y: [6602.99, 6606, 6584.99, 6587.81]
        }, {
          x: new Date(1538865000000),
          y: [6587.81, 6595, 6583.27, 6591.96]
        }, {
          x: new Date(1538866800000),
          y: [6591.97, 6596.07, 6585, 6588.39]
        }, {
          x: new Date(1538868600000),
          y: [6587.6, 6598.21, 6587.6, 6594.27]
        }, {
          x: new Date(1538870400000),
          y: [6596.44, 6601, 6590, 6596.55]
        }, {
          x: new Date(1538872200000),
          y: [6598.91, 6605, 6596.61, 6600.02]
        }, {
          x: new Date(1538874000000),
          y: [6600.55, 6605, 6589.14, 6593.01]
        }, {
          x: new Date(1538875800000),
          y: [6593.15, 6605, 6592, 6603.06]
        }, {
          x: new Date(1538877600000),
          y: [6603.07, 6604.5, 6599.09, 6603.89]
        }, {
          x: new Date(1538879400000),
          y: [6604.44, 6604.44, 6600, 6603.5]
        }, {
          x: new Date(1538881200000),
          y: [6603.5, 6603.99, 6597.5, 6603.86]
        }, {
          x: new Date(1538883000000),
          y: [6603.85, 6605, 6600, 6604.07]
        }, {
          x: new Date(1538884800000),
          y: [6604.98, 6606, 6604.07, 6606]
        }]
      }],
      title: {
        text: 'CandleStick Chart',
        align: 'left'
      },
      colors: ['#0e9e4a', '#FF5370'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      }
    };
    ChartDB.bubble1CAC = {
      chart: {
        height: 350,
        type: 'bubble'
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Bubble1',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble2',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble3',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Bubble4',
        data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
      fill: {
        opacity: 0.8
      },
      title: {
        text: 'Simple Bubble Chart'
      },
      xaxis: {
        tickAmount: 12,
        type: 'category'
      },
      yaxis: {
        max: 70
      }
    };
    ChartDB.bubble2CAC = {
      chart: {
        height: 350,
        type: 'bubble'
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Product1',
        data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Product2',
        data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Product3',
        data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'Product4',
        data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }],
      fill: {
        type: 'gradient'
      },
      colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
      title: {
        text: '3D Bubble Chart'
      },
      xaxis: {
        tickAmount: 12,
        type: 'datetime',
        labels: {
          rotate: 0
        }
      },
      yaxis: {
        max: 70
      },
      theme: {
        palette: 'palette2'
      }
    };
    ChartDB.scatter1CAC = {
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          enabled: true,
          type: 'xy'
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff', '#0e9e4a', '#FF5370', '#FFB64D', '#00acc1'],
      series: [{
        name: 'SAMPLE A',
        data: [[16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]]
      }, {
        name: 'SAMPLE B',
        data: [[36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]]
      }, {
        name: 'SAMPLE C',
        data: [[21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]]
      }],
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter: function formatter(val) {
            return parseFloat(val).toFixed(1);
          }
        }
      },
      yaxis: {
        tickAmount: 7
      }
    };
    ChartDB.scatter2CAC = {
      chart: {
        height: 350,
        type: 'scatter',
        zoom: {
          type: 'xy'
        }
      },
      series: [{
        name: 'TEAM 1',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'TEAM 2',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60
        })
      }, {
        name: 'TEAM 3',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      }, {
        name: 'TEAM 4',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
          min: 10,
          max: 60
        })
      }, {
        name: 'TEAM 5',
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
          min: 10,
          max: 60
        })
      }],
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff', '#0e9e4a', '#FF5370', '#FFB64D', '#00acc1'],
      grid: {
        xaxis: {
          showLines: true
        },
        yaxis: {
          showLines: true
        }
      },
      xaxis: {
        type: 'datetime'
      },
      yaxis: {
        max: 70
      }
    };
    ChartDB.heatMap1CAC = {
      chart: {
        height: 350,
        type: 'heatmap'
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      series: [{
        name: 'Metric1',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric2',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric3',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric4',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric5',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric6',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric7',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric8',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric9',
        data: generateDatasehratheat(12, {
          min: 0,
          max: 90
        })
      }],
      title: {
        text: 'HeatMap Chart (Single color)'
      }
    };
    ChartDB.heatMap2CAC = {
      chart: {
        height: 350,
        type: 'heatmap'
      },
      stroke: {
        width: 0
      },
      plotOptions: {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [{
              from: 0,
              to: 50,
              color: '#FFB64D'
            }, {
              from: 51,
              to: 100,
              color: '#FF5370'
            }]
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ['#fff']
        }
      },
      series: [{
        name: 'Metric1',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric2',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric3',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric4',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric5',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric6',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric7',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric8',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }, {
        name: 'Metric8',
        data: generateDatasehrat(15, {
          min: 0,
          max: 90
        })
      }],
      colors: ['#4099ff', '#00acc1', '#0e9e4a', '#FFB64D', '#FF5370'],
      xaxis: {
        type: 'category'
      },
      title: {
        text: 'Rounded (Range without Shades)'
      }
    };
    ChartDB.pie1CAC = {
      chart: {
        height: 320,
        type: 'pie'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      series: [44, 55, 13, 43, 22],
      colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370'],
      legend: {
        show: true,
        position: 'bottom'
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    ChartDB.pie2CAC = {
      chart: {
        height: 320,
        type: 'donut'
      },
      series: [44, 55, 41, 17, 15],
      colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370'],
      legend: {
        show: true,
        position: 'bottom'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    ChartDB.radialBar1CAC = {
      chart: {
        height: 350,
        type: 'radialBar'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '70%'
          }
        }
      },
      colors: ['#4099ff'],
      series: [70],
      labels: ['Cricket']
    };
    ChartDB.radialBar2CAC = {
      chart: {
        height: 350,
        type: 'radialBar'
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        radialBar: {
          offsetY: -30,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              show: false
            }
          }
        }
      },
      colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
      series: [76, 67, 61, 90],
      labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 0,
        offsetY: 0,
        labels: {
          useSeriesColors: true
        },
        markers: {
          size: 0
        },
        formatter: function formatter(seriesName, opts) {
          return seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 1
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }]
    };
    ChartDB.radar1CAC = {
      chart: {
        height: 350,
        type: 'radar'
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Series 1',
        data: [20, 100, 40, 30, 50, 80, 33]
      }],
      labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColor: '#f3f6ff',
            fill: {
              colors: ['#f3f6ff', '#fff']
            }
          }
        }
      },
      title: {
        text: 'Radar with Polygon Fill'
      },
      colors: ['#FF5370'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF5370',
        strokeWidth: 2
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return val;
          }
        }
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function formatter(val, i) {
            if (i % 2 === 0) {
              return val;
            } else {
              return '';
            }
          }
        }
      }
    };
    ChartDB.radar2CAC = {
      chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20]
      }, {
        name: 'Series 2',
        data: [20, 30, 40, 80, 20, 80]
      }, {
        name: 'Series 3',
        data: [44, 76, 78, 13, 43, 10]
      }],
      title: {
        text: 'Radar Chart - Multi Series'
      },
      colors: ['#4099ff', '#0e9e4a', '#FF5370'],
      stroke: {
        width: 0
      },
      fill: {
        opacity: 0.7
      },
      markers: {
        size: 0
      },
      labels: ['2011', '2012', '2013', '2014', '2015', '2016']
    };
    ChartDB.support1HACC = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#7759de'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.support2HACC = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#4099ff'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.support3HACC = {
      chart: {
        type: 'area',
        height: 100,
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#11c15b'],
      stroke: {
        curve: 'smooth',
        width: 2
      },
      series: [{
        name: 'series1',
        data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
      }],
      tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function formatter(seriesName) {
              return '';
            }
          }
        },
        marker: {
          show: false
        }
      }
    };
    ChartDB.satisfactionHACC = {
      chart: {
        height: 260,
        type: 'pie'
      },
      dataLabels: {
        enabled: false
      },
      series: [66, 50, 40, 30],
      labels: ['Very Poor', 'Satisfied', 'Very Satisfied', 'Poor'],
      legend: {
        show: true,
        offsetY: 50
      },
      theme: {
        monochrome: {
          enabled: true,
          color: '#4099ff'
        }
      },
      responsive: [{
        breakpoint: 768,
        options: {
          chart: {
            height: 320
          },
          legend: {
            position: 'bottom',
            offsetY: 0
          }
        }
      }]
    };

    function generateDataSabraThat(count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        series.push({
          x: 'w' + (i + 1).toString(),
          y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
      }

      return series;
    }

    function generateBubbleData(baseval, count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([x, y, z]);
        baseval += 86400000;
        i++;
      }

      return series;
    }

    function generateDatasehratheatbubble3d(baseval, count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
      }

      return series;
    }

    function generateDayWiseTimeSeries(baseval, count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push([baseval, y]);
        baseval += 86400000;
        i++;
      }

      return series;
    }

    function generateDatasehratheat(count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        series.push({
          x: 'w' + (i + 1).toString(),
          y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
      }

      return series;
    }

    function generateDatasehrat(count, yrange) {
      var i = 0;
      var series = [];

      while (i < count) {
        series.push({
          x: (i + 1).toString(),
          y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
      }

      return series;
    }
    /***/

  },

  /***/
  "./src/app/fack-db/friends-list.ts":
  /*!*****************************************!*\
    !*** ./src/app/fack-db/friends-list.ts ***!
    \*****************************************/

  /*! exports provided: FriendsList */

  /***/
  function srcAppFackDbFriendsListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendsList", function () {
      return FriendsList;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var FriendsList = function FriendsList() {
      _classCallCheck(this, FriendsList);
    };

    FriendsList.friends = [{
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }, {
      id: 1,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Josephin Doe',
      new: 3,
      status: 1,
      time: 'typing'
    }, {
      id: 2,
      photo: 'assets/images/user/avatar-2.jpg',
      name: 'Lary Doe',
      new: 1,
      status: 1,
      time: 'online'
    }, {
      id: 3,
      photo: 'assets/images/user/avatar-3.jpg',
      name: 'Alice',
      status: 1,
      time: 'online'
    }, {
      id: 4,
      photo: 'assets/images/user/avatar-1.jpg',
      name: 'Alia',
      status: 0,
      new: 1,
      time: '10 min ago'
    }, {
      id: 5,
      photo: 'assets/images/user/avatar-4.jpg',
      name: 'Suzen',
      status: 0,
      time: '15 min ago'
    }];
    /***/
  },

  /***/
  "./src/app/fack-db/user-chat.ts":
  /*!**************************************!*\
    !*** ./src/app/fack-db/user-chat.ts ***!
    \**************************************/

  /*! exports provided: UserChat */

  /***/
  function srcAppFackDbUserChatTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserChat", function () {
      return UserChat;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // type 0-send, 1-received


    var UserChat = function UserChat() {
      _classCallCheck(this, UserChat);
    };

    UserChat.chat = [{
      friend_id: 1,
      friend_photo: 'assets/images/avatar-3.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }, {
      friend_id: 2,
      friend_photo: 'assets/images/avatar-2.jpg',
      messages: [{
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      }, {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      }, {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      }, {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }]
    }, {
      friend_id: 3,
      friend_photo: 'assets/images/avatar-4.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }, {
      friend_id: 4,
      friend_photo: 'assets/images/avatar-3.jpg',
      messages: [{
        type: 1,
        msg: 'Hiii!!! Good Morning',
        time: '6:48 a.m'
      }, {
        type: 0,
        msg: 'Hello, Very Good Morning',
        time: '6:50 a.m'
      }, {
        type: 0,
        msg: 'How are You?',
        time: '8:50 a.m'
      }, {
        type: 1,
        msg: 'Fine, What do you do?',
        time: '8:51 a.m'
      }]
    }, {
      friend_id: 5,
      friend_photo: 'assets/images/avatar-2.jpg',
      messages: [{
        type: 1,
        msg: 'I\'m just looking around. Will you tell me something about yourself?',
        time: '8:20 a.m'
      }, {
        type: 0,
        msg: 'Ohh! very nice',
        time: '8:22 a.m'
      }, {
        type: 1,
        msg: 'can you come with me?',
        time: '8:22 a.m'
      }]
    }];
    /***/
  },

  /***/
  "./src/app/layout/configuration/configuration.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/configuration/configuration.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutConfigurationConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.gradient-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.gradient-dark .menu-styler h1,\nbody.gradient-dark .menu-styler h2,\nbody.gradient-dark .menu-styler h3,\nbody.gradient-dark .menu-styler h4,\nbody.gradient-dark .menu-styler h5,\nbody.gradient-dark .menu-styler p,\nbody.gradient-dark .menu-styler h6 {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzYWRyYWpwdXQvYnVpbGQtYW5ndWxhci9zcmMvYXBwL2xheW91dC9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FETUk7RUFDRSxtQ0FBQTtBQ0hOOztBREtJOzs7Ozs7O0VBT0UsV0FBQTtBQ0hOIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXN0eWxlciB7XG4gIC5uYXYtcGlsbHMge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbn1cbmJvZHkuZ3JhZGllbnQtZGFya3tcbiAgLm1lbnUtc3R5bGVye1xuICAgIC50YWItY29udGVudHtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSg0LCAxNjksIDI0NSwgMC4wMyk7XG4gICAgfVxuICAgIGgxLFxuICAgIGgyLFxuICAgIGgzLFxuICAgIGg0LFxuICAgIGg1LFxuICAgIHAsXG4gICAgaDZ7XG4gICAgICBjb2xvcjogIzIyMjtcbiAgICB9XG4gIH1cbn1cbiIsIi5tZW51LXN0eWxlciAubmF2LXBpbGxzIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG5ib2R5LmdyYWRpZW50LWRhcmsgLm1lbnUtc3R5bGVyIC50YWItY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNCwgMTY5LCAyNDUsIDAuMDMpO1xufVxuYm9keS5ncmFkaWVudC1kYXJrIC5tZW51LXN0eWxlciBoMSxcbmJvZHkuZ3JhZGllbnQtZGFyayAubWVudS1zdHlsZXIgaDIsXG5ib2R5LmdyYWRpZW50LWRhcmsgLm1lbnUtc3R5bGVyIGgzLFxuYm9keS5ncmFkaWVudC1kYXJrIC5tZW51LXN0eWxlciBoNCxcbmJvZHkuZ3JhZGllbnQtZGFyayAubWVudS1zdHlsZXIgaDUsXG5ib2R5LmdyYWRpZW50LWRhcmsgLm1lbnUtc3R5bGVyIHAsXG5ib2R5LmdyYWRpZW50LWRhcmsgLm1lbnUtc3R5bGVyIGg2IHtcbiAgY29sb3I6ICMyMjI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/configuration/configuration.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/configuration/configuration.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppLayoutConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var ConfigurationComponent =
    /*#__PURE__*/
    function () {
      function ConfigurationComponent(zone, location) {
        var _this = this;

        _classCallCheck(this, ConfigurationComponent);

        this.zone = zone;
        this.location = location;

        this.scroll = function () {
          if (_this.headerFixedLayout === false) {
            document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100vh)';
            var el = document.querySelector('.pcoded-navbar.menupos-fixed');
            var scrollPosition = window.pageYOffset;

            if (scrollPosition > 60) {
              el.style.position = 'fixed';
              el.style.transition = 'none';
              el.style.marginTop = '0';
            } else {
              el.style.position = 'absolute';
              el.style.marginTop = '60px';
            }
          } else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
            document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
          }
        };

        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.setThemeLayout();
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.styleSelectorToggle = false;
          this.layoutType = this.gradientConfig.layoutType;
          this.setLayout(this.layoutType);
          this.headerBackgroundColor = this.gradientConfig.headerBackColor;
          this.setHeaderBackground(this.headerBackgroundColor);
          this.rtlLayout = this.gradientConfig.rtlLayout;
          this.changeRtlLayout(this.rtlLayout);
          this.menuFixedLayout = this.gradientConfig.navFixedLayout;

          if (this.gradientConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
          }

          this.headerFixedLayout = this.gradientConfig.headerFixedLayout;
          this.changeHeaderFixedLayout(this.headerFixedLayout);
          this.boxLayout = this.gradientConfig.boxLayout;
          this.changeBoxLayout(this.boxLayout);
        }
      }, {
        key: "setThemeLayout",
        value: function setThemeLayout() {
          var currentURL = this.location.path();
          var baseHref = this.location['_baseHref'];

          if (baseHref) {
            currentURL = baseHref + this.location.path();
          }

          switch (currentURL) {
            case baseHref + '/layout/static':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/fixed':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.navFixedLayout = true;
              this.gradientConfig.headerFixedLayout = true;
              break;

            case baseHref + '/layout/nav-fixed':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.navFixedLayout = true;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/collapse-menu':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.collapseMenu = true;
              break;

            case baseHref + '/layout/vertical-rtl':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.rtlLayout = true;
              break;

            case baseHref + '/layout/horizontal':
              this.gradientConfig.layout = 'horizontal';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/horizontal-l2':
              this.gradientConfig.layout = 'horizontal';
              this.gradientConfig.subLayout = 'horizontal-2';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              break;

            case baseHref + '/layout/horizontal-rtl':
              this.gradientConfig.layout = 'horizontal';
              this.gradientConfig.subLayout = 'horizontal-2';
              this.gradientConfig.navFixedLayout = false;
              this.gradientConfig.headerFixedLayout = false;
              this.gradientConfig.rtlLayout = true;
              break;

            case baseHref + '/layout/box':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.boxLayout = true;
              this.gradientConfig.headerFixedLayout = false;
              this.gradientConfig.collapseMenu = true;
              break;

            case baseHref + '/layout/light':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.layoutType = 'menu-light';
              this.gradientConfig.headerBackColor = 'header-default';
              break;

            case baseHref + '/layout/dark':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.layoutType = 'dark';
              this.gradientConfig.headerBackColor = 'header-blue';
              break;

            case baseHref + '/layout/nav-color':
              this.gradientConfig.layout = 'vertical';
              this.gradientConfig.layoutType = 'menu-light';
              this.gradientConfig.headerBackColor = 'header-info';
              this.gradientConfig.navFixedLayout = true;
              this.gradientConfig.headerFixedLayout = true;
              break;

            default:
              break;
          }
        }
      }, {
        key: "setHeaderBackColor",
        value: function setHeaderBackColor(color) {
          this.headerBackColor = color;
          document.querySelector('body').style.background = color;
        } // change main layout

      }, {
        key: "setLayout",
        value: function setLayout(layout) {
          this.isConfig = true;
          document.querySelector('.pcoded-navbar').classList.remove('menu-light');
          document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
          document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
          document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
          document.querySelector('body').classList.remove('gradient-dark');
          this.layoutType = layout;

          if (layout === 'menu-light') {
            document.querySelector('.pcoded-navbar').classList.add(layout);
          }

          if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setHeaderBackground('header-blue');
            document.querySelector('body').classList.add('gradient-dark');
          }

          if (layout === 'reset') {
            this.reset();
          }
        }
      }, {
        key: "reset",
        value: function reset() {
          document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
          this.ngOnInit();
        }
      }, {
        key: "setRtlLayout",
        value: function setRtlLayout(e) {
          var flag = !!e.target.checked;
          this.changeRtlLayout(flag);
        }
      }, {
        key: "changeRtlLayout",
        value: function changeRtlLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('gradient-rtl');
          } else {
            document.querySelector('body').classList.remove('gradient-rtl');
          }
        }
      }, {
        key: "setMenuFixedLayout",
        value: function setMenuFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeMenuFixedLayout(flag);
        }
      }, {
        key: "changeMenuFixedLayout",
        value: function changeMenuFixedLayout(flag) {
          var _this2 = this;

          setTimeout(function () {
            if (flag) {
              document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
              document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');

              if (_this2.gradientConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
              }

              window.addEventListener('scroll', _this2.scroll, true);
              window.scrollTo(0, 0);
            } else {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');

              if (_this2.gradientConfig.layout === 'vertical') {
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
              }

              if (_this2.gradientConfig.layout === 'vertical') {
                window.removeEventListener('scroll', _this2.scroll, true);
              }
            }
          }, 100);
        }
      }, {
        key: "setHeaderFixedLayout",
        value: function setHeaderFixedLayout(e) {
          var flag = !!e.target.checked;
          this.changeHeaderFixedLayout(flag);
        }
      }, {
        key: "changeHeaderFixedLayout",
        value: function changeHeaderFixedLayout(flag) {
          if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
          } else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed'); // static

            if (this.gradientConfig.layout === 'vertical' && this.menuFixedLayout) {
              window.addEventListener('scroll', this.scroll, true);
              window.scrollTo(0, 0);
            } else {
              window.removeEventListener('scroll', this.scroll, true);
            }
          }
        }
      }, {
        key: "setBoxLayout",
        value: function setBoxLayout(e) {
          var flag = !!e.target.checked;
          this.changeBoxLayout(flag);
        }
      }, {
        key: "changeBoxLayout",
        value: function changeBoxLayout(flag) {
          if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
          } else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
          }
        }
      }, {
        key: "setHeaderBackground",
        value: function setHeaderBackground(background) {
          this.headerBackgroundColor = background;
          this.gradientConfig.headerBackColor = background;
          document.querySelector('.pcoded-header').classList.remove('header-blue');
          document.querySelector('.pcoded-header').classList.remove('header-red');
          document.querySelector('.pcoded-header').classList.remove('header-purple');
          document.querySelector('.pcoded-header').classList.remove('header-info');
          document.querySelector('.pcoded-header').classList.remove('header-dark');
          document.querySelector('.pcoded-header').classList.remove('header-orenge');
          document.querySelector('.pcoded-header').classList.remove('header-green');
          document.querySelector('.pcoded-header').classList.remove('header-yellow');
          document.querySelector('.pcoded-header').classList.remove('header-orchidgreen');
          document.querySelector('.pcoded-header').classList.remove('header-indigogreen');
          document.querySelector('.pcoded-header').classList.remove('header-darkgreen');
          document.querySelector('.pcoded-header').classList.remove('header-darkblue');

          if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
          }
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/configuration/configuration.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./configuration.component.scss */
      "./src/app/layout/configuration/configuration.component.scss")).default]
    })], ConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/layout/layout.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent(router, zone, location) {
        _classCallCheck(this, LayoutComponent);

        this.router = router;
        this.zone = zone;
        this.location = location;

        if (localStorage.getItem('login') != 'true') {
          router.navigate(['login']);
        }

        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config; // let currentURL = this.location.path();
        // const baseHerf = this.location['_baseHref'];
        // if (baseHerf) {
        //   currentURL = baseHerf + this.location.path();
        // }

        this.windowWidth = window.innerWidth; // if (currentURL === baseHerf + '/layout/collapse-menu'
        //   || currentURL === baseHerf + '/layout/box'
        //   || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
        //   this.gradientConfig.collapseMenu = true;
        // }

        this.navCollapsed = this.windowWidth >= 992 ? this.gradientConfig.collapseMenu : false;
        this.navCollapsedMob = false;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.windowWidth < 992) {
            this.gradientConfig.layout = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%'; // 100% amit
            }, 500);
          }
        }
      }, {
        key: "navMobClick",
        value: function navMobClick() {
          var _this3 = this;

          if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              this.navCollapsedMob = !this.navCollapsedMob;
              setTimeout(function () {
                _this3.navCollapsedMob = !_this3.navCollapsedMob;
              }, 100);
            } else {
              this.navCollapsedMob = !this.navCollapsedMob;
            }
          }
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.scss */
      "./src/app/layout/layout.component.scss")).default]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-bar.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-bar.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavBarNavBarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-bar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-bar.component.ts ***!
    \*****************************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppLayoutNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app-config */
    "./src/app/app-config.ts");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);

        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleMobOption",
        value: function toggleMobOption() {
          this.menuClass = !this.menuClass;
          this.collapseStyle = this.menuClass ? 'block' : 'none';
        }
      }, {
        key: "navCollapse",
        value: function navCollapse() {
          if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
          } else {
            this.onNavHeaderMobCollapse.emit();
          }
        }
      }]);

      return NavBarComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavBarComponent.prototype, "onNavCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavBarComponent.prototype, "onNavHeaderMobCollapse", void 0);
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-bar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-bar.component.scss */
      "./src/app/layout/nav-bar/nav-bar.component.scss")).default]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-left/nav-left.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-left/nav-left.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavBarNavLeftNavLeftComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-left/nav-left.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-left/nav-left.component.ts ***!
    \***************************************************************/

  /*! exports provided: NavLeftComponent */

  /***/
  function srcAppLayoutNavBarNavLeftNavLeftComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function () {
      return NavLeftComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavLeftComponent =
    /*#__PURE__*/
    function () {
      function NavLeftComponent() {
        _classCallCheck(this, NavLeftComponent);
      }

      _createClass(NavLeftComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavLeftComponent;
    }();

    NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-left',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-left.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-left/nav-left.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-left.component.scss */
      "./src/app/layout/nav-bar/nav-left/nav-left.component.scss")).default]
    })], NavLeftComponent);
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavBarNavLeftNavSearchNavSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NavSearchComponent */

  /***/
  function srcAppLayoutNavBarNavLeftNavSearchNavSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function () {
      return NavSearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavSearchComponent =
    /*#__PURE__*/
    function () {
      function NavSearchComponent() {
        _classCallCheck(this, NavSearchComponent);

        this.searchOn = false;
      }

      _createClass(NavSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavSearchComponent;
    }();

    NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-search.component.scss */
      "./src/app/layout/nav-bar/nav-left/nav-search/nav-search.component.scss")).default]
    })], NavSearchComponent);
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavBarNavRightChatMsgChatMsgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1yaWdodC9jaGF0LW1zZy9jaGF0LW1zZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChatMsgComponent */

  /***/
  function srcAppLayoutNavBarNavRightChatMsgChatMsgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatMsgComponent", function () {
      return ChatMsgComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../fack-db/friends-list */
    "./src/app/fack-db/friends-list.ts");
    /* harmony import */


    var _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../fack-db/user-chat */
    "./src/app/fack-db/user-chat.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");

    var ChatMsgComponent =
    /*#__PURE__*/
    function () {
      function ChatMsgComponent(rend) {
        _classCallCheck(this, ChatMsgComponent);

        this.rend = rend;
        this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newReplay = '';
      }

      _createClass(ChatMsgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__["FriendsList"].friends;
          this.userChat = _fack_db_user_chat__WEBPACK_IMPORTED_MODULE_3__["UserChat"].chat;
          this.chatMessage = findObjectByKeyValue(this.friendsList, 'id', this.friendId);

          if (this.chatMessage) {
            var message = findObjectByKeyValue(this.userChat, 'friend_id', this.friendId);

            if (message) {
              this.chatMessage['chat'] = message['messages'];
            }
          }
        }
      }, {
        key: "sentMsg",
        value: function sentMsg(flag) {
          var _this4 = this;

          if (this.message === '' || this.message === undefined) {
            this.message_error = true;
          } else {
            if (flag === 1) {
              this.message_error = false;
            } else {
              this.message_error = false;
              var temp_replay = this.message;
              var html_send;
              html_send = '<div class="media chat-messages">' + '<div class="media-body chat-menu-reply">' + '<div class="">' + '<p class="chat-cont">' + this.message + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
              this.newReplay = this.newReplay + html_send;
              this.message = '';
              setTimeout(function () {
                _this4.componentRef.directiveRef.scrollToBottom();
              }, 100);
              this.friendWriting = true;
              setTimeout(function () {
                _this4.friendWriting = false;
                var html_replay;
                html_replay = '<div class="media chat-messages">' + '<a class="media-left photo-table" href="javascript:">' + '<img class="media-object img-radius img-radius m-t-5" src="' + _this4.chatMessage.photo + '" alt="' + _this4.chatMessage.name + '">' + '</a>' + '<div class="media-body chat-menu-content">' + '<div class="">' + '<p class="chat-cont">hello superior personality you write</p>' + '<p class="chat-cont">' + temp_replay + '</p>' + '</div>' + '<p class="chat-time">now</p>' + '</div>' + '</div>';
                _this4.newReplay = _this4.newReplay + html_replay;
                setTimeout(function () {
                  _this4.componentRef.directiveRef.scrollToBottom();
                }, 100);
              }, 3000);
            }
          }
        }
      }]);

      return ChatMsgComponent;
    }();

    ChatMsgComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatMsgComponent.prototype, "friendId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatMsgComponent.prototype, "onChatToggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('newChat', {
      static: false,
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], ChatMsgComponent.prototype, "newChat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"], {
      static: false
    })], ChatMsgComponent.prototype, "componentRef", void 0);
    ChatMsgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-msg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-msg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-msg.component.scss */
      "./src/app/layout/nav-bar/nav-right/chat-msg/chat-msg.component.scss")).default]
    })], ChatMsgComponent);

    function findObjectByKeyValue(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }

      return false;
    }
    /***/

  },

  /***/
  "./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavBarNavRightChatUserListChatUserListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1yaWdodC9jaGF0LXVzZXItbGlzdC9jaGF0LXVzZXItbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ChatUserListComponent */

  /***/
  function srcAppLayoutNavBarNavRightChatUserListChatUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatUserListComponent", function () {
      return ChatUserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../fack-db/friends-list */
    "./src/app/fack-db/friends-list.ts");

    var ChatUserListComponent =
    /*#__PURE__*/
    function () {
      function ChatUserListComponent() {
        _classCallCheck(this, ChatUserListComponent);

        this.onChatCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChatToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.friendsList = _fack_db_friends_list__WEBPACK_IMPORTED_MODULE_2__["FriendsList"].friends;
      }

      _createClass(ChatUserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChatOn",
        value: function onChatOn(friend_id) {
          this.onChatToggle.emit(friend_id);
        }
      }]);

      return ChatUserListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatUserListComponent.prototype, "onChatCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatUserListComponent.prototype, "onChatToggle", void 0);
    ChatUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-user-list.component.scss */
      "./src/app/layout/nav-bar/nav-right/chat-user-list/chat-user-list.component.scss")).default]
    })], ChatUserListComponent);
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavBarNavRightChatUserListFriendFriendComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1yaWdodC9jaGF0LXVzZXItbGlzdC9mcmllbmQvZnJpZW5kLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.ts ***!
    \************************************************************************************/

  /*! exports provided: FriendComponent */

  /***/
  function srcAppLayoutNavBarNavRightChatUserListFriendFriendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendComponent", function () {
      return FriendComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FriendComponent =
    /*#__PURE__*/
    function () {
      function FriendComponent() {
        _classCallCheck(this, FriendComponent);

        this.onChatOn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(FriendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "innerChatToggle",
        value: function innerChatToggle(id) {
          this.onChatOn.emit();
        }
      }]);

      return FriendComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FriendComponent.prototype, "friends", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], FriendComponent.prototype, "onChatOn", void 0);
    FriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friend',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend.component.scss */
      "./src/app/layout/nav-bar/nav-right/chat-user-list/friend/friend.component.scss")).default]
    })], FriendComponent);
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-right/nav-right.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/nav-right.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavBarNavRightNavRightComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/nav-bar/nav-right/nav-right.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/nav-bar/nav-right/nav-right.component.ts ***!
    \*****************************************************************/

  /*! exports provided: NavRightComponent */

  /***/
  function srcAppLayoutNavBarNavRightNavRightComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavRightComponent", function () {
      return NavRightComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../app-config */
    "./src/app/app-config.ts");

    var NavRightComponent =
    /*#__PURE__*/
    function () {
      function NavRightComponent() {
        _classCallCheck(this, NavRightComponent);

        this.visibleUserList = false;
        this.chatMessage = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["GradientConfig"].config;
      }

      _createClass(NavRightComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChatToggle",
        value: function onChatToggle(friendID) {
          this.friendId = friendID;
          this.chatMessage = !this.chatMessage;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (document.querySelector('body').classList.contains('elite-rtl')) {
            this.gradientConfig['rtl-layout'] = true;
          } else {
            this.gradientConfig['rtl-layout'] = false;
          }
        }
      }]);

      return NavRightComponent;
    }();

    NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-right',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-right.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/nav-bar/nav-right/nav-right.component.html")).default,
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(100%)'
      }))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'translateX(-100%)'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-right.component.scss */
      "./src/app/layout/nav-bar/nav-right/nav-right.component.scss")).default]
    })], NavRightComponent);
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavigationNavContentNavCollapseNavCollapseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: NavCollapseComponent */

  /***/
  function srcAppLayoutNavigationNavContentNavCollapseNavCollapseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function () {
      return NavCollapseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");

    var NavCollapseComponent =
    /*#__PURE__*/
    function () {
      function NavCollapseComponent() {
        _classCallCheck(this, NavCollapseComponent);

        this.visible = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
        this.themeLayout = this.gradientConfig.layout;
      }

      _createClass(NavCollapseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navCollapse",
        value: function navCollapse(e) {
          this.visible = !this.visible;
          var parent = e.target;

          if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
          }

          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
              sections[i].classList.remove('pcoded-trigger');
            }
          }

          var firstParent = parent.parentElement;
          var preParent = parent.parentElement.parentElement;

          if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
              firstParent.classList.add('pcoded-trigger'); // firstParent.parentElement.classList.toggle('pcoded-trigger');

              firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
          } else if (preParent.classList.contains('pcoded-submenu')) {
            do {
              preParent.parentElement.classList.add('pcoded-trigger');
              preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
          }

          parent.classList.toggle('pcoded-trigger');
        }
      }]);

      return NavCollapseComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavCollapseComponent.prototype, "item", void 0);
    NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-collapse',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-collapse.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)',
        display: 'block'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(0%)'
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: 'translateY(-100%)'
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-collapse.component.scss */
      "./src/app/layout/navigation/nav-content/nav-collapse/nav-collapse.component.scss")).default]
    })], NavCollapseComponent);
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-content.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-content.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavigationNavContentNavContentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-content.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-content.component.ts ***!
    \************************************************************************/

  /*! exports provided: NavContentComponent */

  /***/
  function srcAppLayoutNavigationNavContentNavContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavContentComponent", function () {
      return NavContentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navigation */
    "./src/app/layout/navigation/navigation.ts");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var NavContentComponent =
    /*#__PURE__*/
    function () {
      function NavContentComponent(nav, zone, location) {
        _classCallCheck(this, NavContentComponent);

        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
      }

      _createClass(NavContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.windowWidth < 992) {
            this.gradientConfig['layout'] = 'vertical';
            setTimeout(function () {
              document.querySelector('.pcoded-navbar').classList.add('menupos-static');
              document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%';
            }, 500);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.gradientConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
          }
        }
      }, {
        key: "scrollPlus",
        value: function scrollPlus() {
          this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);

          if (this.scrollWidth > this.contentWidth - this.wrapperWidth) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
          }

          this.prevDisabled = '';

          if (this.gradientConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "scrollMinus",
        value: function scrollMinus() {
          this.scrollWidth = this.scrollWidth - this.wrapperWidth;

          if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
          }

          this.nextDisabled = '';

          if (this.gradientConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
          } else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
          }
        }
      }, {
        key: "fireLeave",
        value: function fireLeave() {
          var sections = document.querySelectorAll('.pcoded-hasmenu');

          for (var i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
          }

          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              last_parent.classList.add('active');
            }
          }
        }
      }, {
        key: "navMob",
        value: function navMob() {
          if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
          }
        }
      }, {
        key: "fireOutClick",
        value: function fireOutClick() {
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavContentComponent;
    }();

    NavContentComponent.ctorParameters = function () {
      return [{
        type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavContentComponent.prototype, "onNavMobCollapse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', {
      static: false
    })], NavContentComponent.prototype, "navbarContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', {
      static: false
    })], NavContentComponent.prototype, "navbarWrapper", void 0);
    NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-content',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-content.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-content.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-content.component.scss */
      "./src/app/layout/navigation/nav-content/nav-content.component.scss")).default]
    })], NavContentComponent);
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-group/nav-group.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-group/nav-group.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavigationNavContentNavGroupNavGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-group/nav-group.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-group/nav-group.component.ts ***!
    \********************************************************************************/

  /*! exports provided: NavGroupComponent */

  /***/
  function srcAppLayoutNavigationNavContentNavGroupNavGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function () {
      return NavGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");

    var NavGroupComponent =
    /*#__PURE__*/
    function () {
      function NavGroupComponent(zone, location) {
        _classCallCheck(this, NavGroupComponent);

        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
      }

      _createClass(NavGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // at reload time active and trigger link
          var current_url = this.location.path();

          if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
          }

          var link = "a.nav-link[ href='" + current_url + "' ]";
          var ele = document.querySelector(link);

          if (ele !== null && ele !== undefined) {
            var parent = ele.parentElement;
            var up_parent = parent.parentElement.parentElement;
            var last_parent = up_parent.parentElement;

            if (parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                parent.classList.add('pcoded-trigger');
              }

              parent.classList.add('active');
            } else if (up_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                up_parent.classList.add('pcoded-trigger');
              }

              up_parent.classList.add('active');
            } else if (last_parent.classList.contains('pcoded-hasmenu')) {
              if (this.gradientConfig['layout'] === 'vertical') {
                last_parent.classList.add('pcoded-trigger');
              }

              last_parent.classList.add('active');
            }
          }
        }
      }]);

      return NavGroupComponent;
    }();

    NavGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "layout1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavGroupComponent.prototype, "activeId", void 0);
    NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-group/nav-group.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-group.component.scss */
      "./src/app/layout/navigation/nav-content/nav-group/nav-group.component.scss")).default]
    })], NavGroupComponent);
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-item/nav-item.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-item/nav-item.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavigationNavContentNavItemNavItemComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/navigation/nav-content/nav-item/nav-item.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/navigation/nav-content/nav-item/nav-item.component.ts ***!
    \******************************************************************************/

  /*! exports provided: NavItemComponent */

  /***/
  function srcAppLayoutNavigationNavContentNavItemNavItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavItemComponent", function () {
      return NavItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../app-config */
    "./src/app/app-config.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var NavItemComponent =
    /*#__PURE__*/
    function () {
      function NavItemComponent(location) {
        _classCallCheck(this, NavItemComponent);

        this.location = location;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.themeLayout = this.gradientConfig['layout'];
      }

      _createClass(NavItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeOtherMenu",
        value: function closeOtherMenu(event) {
          var _this5 = this;

          if (this.gradientConfig['layout'] === 'vertical') {
            var ele = event.target;

            if (ele !== null && ele !== undefined) {
              var parent = ele.parentElement;
              var up_parent = parent.parentElement.parentElement;
              var last_parent = up_parent.parentElement;
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove('active');
                sections[i].classList.remove('pcoded-trigger');
              }

              if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('pcoded-trigger');
                parent.classList.add('active');
              } else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('pcoded-trigger');
                up_parent.classList.add('active');
              } else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('pcoded-trigger');
                last_parent.classList.add('active');
              }
            }

            if (document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
              document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
          } else {
            setTimeout(function () {
              var sections = document.querySelectorAll('.pcoded-hasmenu');

              for (var _i = 0; _i < sections.length; _i++) {
                sections[_i].classList.remove('active');

                sections[_i].classList.remove('pcoded-trigger');
              }

              var current_url = _this5.location.path();

              if (_this5.location['_baseHref']) {
                current_url = _this5.location['_baseHref'] + _this5.location.path();
              }

              var link = "a.nav-link[ href='" + current_url + "' ]";
              var ele = document.querySelector(link);

              if (ele !== null && ele !== undefined) {
                var _parent = ele.parentElement;
                var _up_parent = _parent.parentElement.parentElement;
                var _last_parent = _up_parent.parentElement;

                if (_parent.classList.contains('pcoded-hasmenu')) {
                  _parent.classList.add('active');
                } else if (_up_parent.classList.contains('pcoded-hasmenu')) {
                  _up_parent.classList.add('active');
                } else if (_last_parent.classList.contains('pcoded-hasmenu')) {
                  _last_parent.classList.add('active');
                }
              }
            }, 500);
          }
        }
      }]);

      return NavItemComponent;
    }();

    NavItemComponent.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], NavItemComponent.prototype, "item", void 0);
    NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/nav-content/nav-item/nav-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav-item.component.scss */
      "./src/app/layout/navigation/nav-content/nav-item/nav-item.component.scss")).default]
    })], NavItemComponent);
    /***/
  },

  /***/
  "./src/app/layout/navigation/navigation.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/layout/navigation/navigation.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutNavigationNavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/navigation/navigation.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/navigation/navigation.component.ts ***!
    \***********************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppLayoutNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app-config */
    "./src/app/app-config.ts");

    var NavigationComponent =
    /*#__PURE__*/
    function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);

        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.windowWidth = window.innerWidth;
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "navMobCollapse",
        value: function navMobCollapse() {
          if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
          }
        }
      }]);

      return NavigationComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], NavigationComponent.prototype, "onNavMobCollapse", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/navigation/navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navigation.component.scss */
      "./src/app/layout/navigation/navigation.component.scss")).default]
    })], NavigationComponent);
    /***/
  },

  /***/
  "./src/app/layout/navigation/navigation.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/navigation/navigation.ts ***!
    \*************************************************/

  /*! exports provided: NavigationItem */

  /***/
  function srcAppLayoutNavigationNavigationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationItem", function () {
      return NavigationItem;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavigationItems = [{
      id: 'navigation',
      title: 'Navigation',
      type: 'group',
      icon: 'feather icon-monitor',
      children: [{
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        icon: 'feather icon-home',
        url: '/public',
        breadcrumbs: false
      }, {
        id: 'users',
        title: 'Users',
        type: 'collapse',
        icon: 'feather icon-lock',
        children: [{
          id: 'add',
          title: 'Add User',
          type: 'item',
          url: '/public/add-user',
          target: false
        }, {
          id: 'view',
          title: 'View Users',
          type: 'item',
          url: '/public/view-user',
          target: false
        }]
      }, {
        id: 'manufacturers',
        title: 'Manufacturers',
        type: 'collapse',
        icon: 'feather icon-box',
        children: [{
          id: 'add',
          title: 'Add Manufacturer',
          type: 'item',
          url: '/public/add-manufacturer',
          target: false
        }, {
          id: 'view',
          title: 'View Manufacturers',
          type: 'item',
          url: '/public/view-manufacturer',
          target: false
        }]
      }, {
        id: 'page-layouts',
        title: 'Brands',
        type: 'collapse',
        icon: 'feather icon-file-text',
        children: [{
          id: 'vertical',
          title: 'Add Brand',
          type: 'item',
          url: '/layout/fixed',
          target: true
        }, {
          id: 'horizontal',
          title: 'View Brands',
          type: 'item',
          url: '/layout/horizontal',
          target: true
        }]
      }, {
        id: 'basic',
        title: 'Categories',
        type: 'collapse',
        icon: 'feather icon-server',
        children: [{
          id: 'button',
          title: 'Add Category',
          type: 'item',
          url: '/basic/button'
        }, {
          id: 'badges',
          title: 'View Categories',
          type: 'item',
          url: '/basic/badges'
        }]
      }, {
        id: 'basic',
        title: 'Product Attributes',
        type: 'collapse',
        icon: 'feather icon-pie-chart',
        children: [{
          id: 'button',
          title: 'Add Attributes',
          type: 'item',
          url: '/basic/button'
        }, {
          id: 'badges',
          title: 'View Attributes',
          type: 'item',
          url: '/basic/badges'
        }, {
          id: 'badges',
          title: 'Assign Attributes',
          type: 'item',
          url: '/basic/badges'
        }]
      }, {
        id: 'basic',
        title: 'Products',
        type: 'collapse',
        icon: 'feather icon-sidebar',
        children: [{
          id: 'button',
          title: 'Add Products',
          type: 'item',
          url: '/basic/button'
        }, {
          id: 'badges',
          title: 'View Products',
          type: 'item',
          url: '/basic/badges'
        }, {
          id: 'badges',
          title: 'Assign Product Categories',
          type: 'item',
          url: '/basic/badges'
        }]
      }, {
        id: 'basic',
        title: 'Assignment',
        type: 'collapse',
        icon: 'feather icon-sidebar',
        children: [{
          id: 'button',
          title: 'Assign',
          type: 'item',
          url: '/basic/button'
        }, {
          id: 'badges',
          title: 'View Assignments',
          type: 'item',
          url: '/basic/badges'
        }]
      }]
    }];

    var NavigationItem =
    /*#__PURE__*/
    function () {
      function NavigationItem() {
        _classCallCheck(this, NavigationItem);
      }

      _createClass(NavigationItem, [{
        key: "get",
        value: function get() {
          return NavigationItems;
        }
      }]);

      return NavigationItem;
    }();

    NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NavigationItem);
    /***/
  },

  /***/
  "./src/app/pages/auth-signin/auth-signin.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/auth-signin/auth-signin.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAuthSigninAuthSigninComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgtc2lnbmluL2F1dGgtc2lnbmluLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/auth-signin/auth-signin.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/auth-signin/auth-signin.component.ts ***!
    \************************************************************/

  /*! exports provided: AuthSigninComponent */

  /***/
  function srcAppPagesAuthSigninAuthSigninComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function () {
      return AuthSigninComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthSigninComponent =
    /*#__PURE__*/
    function () {
      function AuthSigninComponent(route) {
        _classCallCheck(this, AuthSigninComponent);

        this.route = route;
      }

      _createClass(AuthSigninComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onclick",
        value: function onclick() {
          if (localStorage.getItem('login') === 'true') {
            this.route.navigate(['public']);
          } else {
            localStorage.setItem('login', 'true');
            this.route.navigate(['/public']);
          }
        }
      }]);

      return AuthSigninComponent;
    }();

    AuthSigninComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-auth-signin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth-signin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth-signin/auth-signin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth-signin.component.scss */
      "./src/app/pages/auth-signin/auth-signin.component.scss")).default]
    })], AuthSigninComponent);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../fack-db/chart-data */
    "./src/app/fack-db/chart-data.ts");
    /* harmony import */


    var _shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/components/chart/apex-chart/apex-chart.service */
    "./src/app/shared/components/chart/apex-chart/apex-chart.service.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(apexEvent) {
        _classCallCheck(this, DashboardComponent);

        this.apexEvent = apexEvent;
        this.chartDB = _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_2__["ChartDB"];
        this.dailyVisitorStatus = '1y';
        this.deviceProgressBar = [{
          type: 'success',
          value: 66
        }, {
          type: 'primary',
          value: 26
        }, {
          type: 'danger',
          value: 8
        }];
      }

      _createClass(DashboardComponent, [{
        key: "dailyVisitorEvent",
        value: function dailyVisitorEvent(status) {
          var _this6 = this;

          this.dailyVisitorStatus = status;

          switch (status) {
            case '1m':
              this.dailyVisitorAxis = {
                min: new Date('28 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case '6m':
              this.dailyVisitorAxis = {
                min: new Date('27 Sep 2012').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case '1y':
              this.dailyVisitorAxis = {
                min: new Date('27 Feb 2012').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case 'ytd':
              this.dailyVisitorAxis = {
                min: new Date('01 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case 'all':
              this.dailyVisitorAxis = {
                min: undefined,
                max: undefined
              };
              break;
          }

          setTimeout(function () {
            _this6.apexEvent.eventChangeTimeRange();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/pages/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesManufacturersAddManufacturerAddManufacturerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbnVmYWN0dXJlcnMvYWRkLW1hbnVmYWN0dXJlci9hZGQtbWFudWZhY3R1cmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.ts ***!
    \************************************************************************************/

  /*! exports provided: AddManufacturerComponent */

  /***/
  function srcAppPagesManufacturersAddManufacturerAddManufacturerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddManufacturerComponent", function () {
      return AddManufacturerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);

    var AddManufacturerComponent =
    /*#__PURE__*/
    function () {
      function AddManufacturerComponent(http) {
        _classCallCheck(this, AddManufacturerComponent);

        this.http = http;
        this.filename = "Choose File";
        this.fileToUpload = null;
        this.wopts = {
          bookType: 'xlsx',
          type: 'array'
        };
        this.fileName = 'SheetJS.xlsx';
        this.submitLoader = false;
      }

      _createClass(AddManufacturerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleFileInput",
        value: function handleFileInput(e) {
          if (e.target.files.length !== 1) {
            this.filename = "Choose File";
            return "Cannot use multiple files";
          } else if (e.target.files.length == 1) {
            this.filename = e.target.files.item(0).name;
            this.fileToUpload = e.target.files.item(0);
            this.fileUpload(e);
          } else {
            this.filename = "Choose File";
            return "Error in reading file";
          }
        }
      }, {
        key: "fileUpload",
        value: function fileUpload(e) {
          if (this.fileToUpload) {
            var reader = new FileReader();

            reader.onload = function (e) {
              var bstr = e.target.result;
              var wb = xlsx__WEBPACK_IMPORTED_MODULE_3__["read"](bstr, {
                type: 'binary'
              });
              var wsname = wb.SheetNames[0];
              var ws = wb.Sheets[wsname];
              var data = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].sheet_to_json(ws, {
                header: 1
              }); // this.http.post(environment.host + 'manufacturer/bulkupload', data).subscribe((res) => {
              // })
            };

            reader.readAsBinaryString(e.target.files[0]);
          } else {
            // this.toastr.success('Hello world!', 'Toastr fun!');
            return "Please select file";
          }
        }
      }, {
        key: "onSubmitLoader",
        value: function onSubmitLoader() {
          var _this7 = this;

          this.submitLoader = true;
          setTimeout(function () {
            _this7.submitLoader = false;
          }, 2000);
        }
      }]);

      return AddManufacturerComponent;
    }();

    AddManufacturerComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AddManufacturerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-manufacturer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-manufacturer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-manufacturer.component.scss */
      "./src/app/pages/manufacturers/add-manufacturer/add-manufacturer.component.scss")).default]
    })], AddManufacturerComponent);
    /***/
  },

  /***/
  "./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesManufacturersViewManufacturerViewManufacturerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbnVmYWN0dXJlcnMvdmlldy1tYW51ZmFjdHVyZXIvdmlldy1tYW51ZmFjdHVyZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ViewManufacturerComponent */

  /***/
  function srcAppPagesManufacturersViewManufacturerViewManufacturerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewManufacturerComponent", function () {
      return ViewManufacturerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ViewManufacturerComponent =
    /*#__PURE__*/
    function () {
      function ViewManufacturerComponent(http) {
        _classCallCheck(this, ViewManufacturerComponent);

        this.http = http;
        this.getUsers();
      }

      _createClass(ViewManufacturerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUsers",
        value: function getUsers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this8 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'manufacturer').subscribe(function (res) {
                      if (Array(res).length > 0) {
                        _this8.manufacturers = res;
                      }
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ViewManufacturerComponent;
    }();

    ViewManufacturerComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ViewManufacturerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-manufacturer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-manufacturer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-manufacturer.component.scss */
      "./src/app/pages/manufacturers/view-manufacturer/view-manufacturer.component.scss")).default]
    })], ViewManufacturerComponent);
    /***/
  },

  /***/
  "./src/app/pages/users/add-user/add-user.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/users/add-user/add-user.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersAddUserAddUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/users/add-user/add-user.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/users/add-user/add-user.component.ts ***!
    \************************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppPagesUsersAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddUserComponent =
    /*#__PURE__*/
    function () {
      function AddUserComponent() {
        _classCallCheck(this, AddUserComponent);

        this.submitLoader = false;
      }

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmitLoader",
        value: function onSubmitLoader() {
          var _this9 = this;

          this.submitLoader = true;
          setTimeout(function () {
            _this9.submitLoader = false;
          }, 2000);
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/add-user/add-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.scss */
      "./src/app/pages/users/add-user/add-user.component.scss")).default]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/pages/users/view-user/view-user.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/pages/users/view-user/view-user.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesUsersViewUserViewUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzZXJzL3ZpZXctdXNlci92aWV3LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/users/view-user/view-user.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/users/view-user/view-user.component.ts ***!
    \**************************************************************/

  /*! exports provided: ViewUserComponent */

  /***/
  function srcAppPagesUsersViewUserViewUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function () {
      return ViewUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var ViewUserComponent =
    /*#__PURE__*/
    function () {
      function ViewUserComponent(http) {
        _classCallCheck(this, ViewUserComponent);

        this.http = http;
        this.getUsers();
      }

      _createClass(ViewUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUsers",
        value: function getUsers() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].host + 'user').subscribe(function (res) {
                      console.log(res);

                      if (Array(res).length > 0) {
                        _this10.users = res;
                      }
                    });

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return ViewUserComponent;
    }();

    ViewUserComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ViewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/users/view-user/view-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-user.component.scss */
      "./src/app/pages/users/view-user/view-user.component.scss")).default]
    })], ViewUserComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/breadcrumb/breadcrumb.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsBreadcrumbBreadcrumbComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/breadcrumb/breadcrumb.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
    \**********************************************************************/

  /*! exports provided: BreadcrumbComponent */

  /***/
  function srcAppSharedComponentsBreadcrumbBreadcrumbComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
      return BreadcrumbComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _layout_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../layout/navigation/navigation */
    "./src/app/layout/navigation/navigation.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var BreadcrumbComponent =
    /*#__PURE__*/
    function () {
      function BreadcrumbComponent(route, nav, titleService) {
        _classCallCheck(this, BreadcrumbComponent);

        this.route = route;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigationList = [];
        this.navigation = this.nav.get();
        this.type = 'theme2';
        this.setBreadcrumb();
      }

      _createClass(BreadcrumbComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var routerUrl;
          routerUrl = this.route.url;

          if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
          }
        }
      }, {
        key: "setBreadcrumb",
        value: function setBreadcrumb() {
          var _this11 = this;

          var routerUrl;
          this.route.events.subscribe(function (router) {
            routerUrl = router.urlAfterRedirects;

            if (routerUrl && typeof routerUrl === 'string') {
              _this11.breadcrumbList.length = 0;
              var activeLink = router.url;

              _this11.filterNavigation(activeLink);
            }
          });
        }
      }, {
        key: "filterNavigation",
        value: function filterNavigation(activeLink) {
          var result = [];
          var title = 'Welcome';
          this.navigation.forEach(function (a) {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
              result = [{
                url: 'url' in a ? a.url : false,
                title: a.title,
                breadcrumbs: 'breadcrumbs' in a ? a.breadcrumbs : true,
                type: a.type
              }];
              title = a.title;
            } else {
              if (a.type === 'group' && 'children' in a) {
                a.children.forEach(function (b) {
                  if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                    result = [{
                      url: 'url' in b ? b.url : false,
                      title: b.title,
                      breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                      type: b.type
                    }];
                    title = b.title;
                  } else {
                    if (b.type === 'collapse' && 'children' in b) {
                      b.children.forEach(function (c) {
                        if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                          result = [{
                            url: 'url' in b ? b.url : false,
                            title: b.title,
                            breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                            type: b.type
                          }, {
                            url: 'url' in c ? c.url : false,
                            title: c.title,
                            breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                            type: c.type
                          }];
                          title = c.title;
                        } else {
                          if (c.type === 'collapse' && 'children' in c) {
                            c.children.forEach(function (d) {
                              if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                result = [{
                                  url: 'url' in b ? b.url : false,
                                  title: b.title,
                                  breadcrumbs: 'breadcrumbs' in b ? b.breadcrumbs : true,
                                  type: b.type
                                }, {
                                  url: 'url' in c ? c.url : false,
                                  title: c.title,
                                  breadcrumbs: 'breadcrumbs' in c ? c.breadcrumbs : true,
                                  type: c.type
                                }, {
                                  url: 'url' in d ? d.url : false,
                                  title: d.title,
                                  breadcrumbs: 'breadcrumbs' in c ? d.breadcrumbs : true,
                                  type: d.type
                                }];
                                title = d.title;
                              }
                            });
                          }
                        }
                      });
                    }
                  }
                });
              }
            }
          });
          this.navigationList = result;
          this.titleService.setTitle(title + ' | Salsoft Admin');
        }
      }]);

      return BreadcrumbComponent;
    }();

    BreadcrumbComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _layout_navigation_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BreadcrumbComponent.prototype, "type", void 0);
    BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/breadcrumb/breadcrumb.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breadcrumb.component.scss */
      "./src/app/shared/components/breadcrumb/breadcrumb.component.scss")).default]
    })], BreadcrumbComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/breadcrumb/breadcrumb.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/components/breadcrumb/breadcrumb.module.ts ***!
    \*******************************************************************/

  /*! exports provided: BreadcrumbModule */

  /***/
  function srcAppSharedComponentsBreadcrumbBreadcrumbModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return BreadcrumbModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./breadcrumb.component */
    "./src/app/shared/components/breadcrumb/breadcrumb.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BreadcrumbModule = function BreadcrumbModule() {
      _classCallCheck(this, BreadcrumbModule);
    };

    BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
      exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
    })], BreadcrumbModule);
    /***/
  },

  /***/
  "./src/app/shared/components/card/card.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/shared/components/card/card.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzYWRyYWpwdXQvYnVpbGQtYW5ndWxhci9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuIiwiLmNhcmQuZnVsbC1jYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/card/card.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/components/card/card.component.ts ***!
    \**********************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppSharedComponentsCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! css-animator */
    "./node_modules/css-animator/index.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var CardComponent =
    /*#__PURE__*/
    function () {
      function CardComponent(animationService, config) {
        _classCallCheck(this, CardComponent);

        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.hidHeader) {
            this.options = false;
          }

          if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
          }
        }
      }, {
        key: "fullCardToggle",
        value: function fullCardToggle(element, animation, status) {
          var _this12 = this;

          animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
          this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize'; // const duration = this.cardClass === 'full-card' ? 300 : 600;

          this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';

          if (status) {
            this.animation = animation;
          }

          this.isAnimating = true;
          this.animators.setType(this.animation).setDuration(500).setDirection('alternate').setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)').animate(element).then(function () {
            _this12.isAnimating = false;
          }).catch(function () {
            _this12.isAnimating = false;
          });
          setTimeout(function () {
            _this12.cardClass = animation === 'zoomOut' ? '' : _this12.cardClass;

            if (_this12.cardClass === 'full-card') {
              document.querySelector('body').style.overflow = 'hidden';
            } else {
              document.querySelector('body').removeAttribute('style');
            }
          }, 500);
        }
      }, {
        key: "collapsedCardToggle",
        value: function collapsedCardToggle() {
          this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
          this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
        }
      }, {
        key: "cardRefresh",
        value: function cardRefresh() {
          var _this13 = this;

          this.loadCard = true;
          this.cardClass = 'card-load';
          setTimeout(function () {
            _this13.loadCard = false;
            _this13.cardClass = 'expanded';
          }, 3000);
        }
      }, {
        key: "cardRemoveAction",
        value: function cardRemoveAction() {
          this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
        }
      }]);

      return CardComponent;
    }();

    CardComponent.ctorParameters = function () {
      return [{
        type: css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "headerClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "hidHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "customHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardCaption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "captionClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "isCardFooter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "footerClass", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/card/card.component.html")).default,
      providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('collapsedCard', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        overflow: 'hidden',
        height: '0px'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        overflow: 'hidden',
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AUTO_STYLE"]
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('cardRemove', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        opacity: 0,
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/shared/components/card/card.component.scss")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/card/card.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/components/card/card.module.ts ***!
    \*******************************************************/

  /*! exports provided: CardModule */

  /***/
  function srcAppSharedComponentsCardCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return CardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card.component */
    "./src/app/shared/components/card/card.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! css-animator */
    "./node_modules/css-animator/index.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);

    var CardModule = function CardModule() {
      _classCallCheck(this, CardModule);
    };

    CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"], css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]],
      declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
      providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
    })], CardModule);
    /***/
  },

  /***/
  "./src/app/shared/components/chart/apex-chart/apex-chart.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/chart/apex-chart/apex-chart.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsChartApexChartApexChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYXJ0L2FwZXgtY2hhcnQvYXBleC1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/components/chart/apex-chart/apex-chart.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/chart/apex-chart/apex-chart.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ApexChartComponent */

  /***/
  function srcAppSharedComponentsChartApexChartApexChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function () {
      return ApexChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! apexcharts/dist/apexcharts.common.js */
    "./node_modules/apexcharts/dist/apexcharts.common.js");
    /* harmony import */


    var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./apex-chart.service */
    "./src/app/shared/components/chart/apex-chart/apex-chart.service.ts");

    var ApexChartComponent =
    /*#__PURE__*/
    function () {
      function ApexChartComponent(apexEvent) {
        _classCallCheck(this, ApexChartComponent);

        this.apexEvent = apexEvent;
      }

      _createClass(ApexChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          setTimeout(function () {
            _this14.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#' + _this14.chartID), _this14.chartConfig);

            _this14.chart.render();
          });
          this.apexEvent.changeTimeRange.subscribe(function () {
            if (_this14.xAxis) {
              _this14.chart.updateOptions({
                xaxis: _this14.xAxis
              });
            }
          });
          this.apexEvent.changeSeriesData.subscribe(function () {
            if (_this14.newData) {
              _this14.chart.updateSeries([{
                data: _this14.newData
              }]);
            }
          });
        }
      }]);

      return ApexChartComponent;
    }();

    ApexChartComponent.ctorParameters = function () {
      return [{
        type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "chartID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "chartConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "xAxis", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ApexChartComponent.prototype, "newData", void 0);
    ApexChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-apex-chart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./apex-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chart/apex-chart/apex-chart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./apex-chart.component.scss */
      "./src/app/shared/components/chart/apex-chart/apex-chart.component.scss")).default]
    })], ApexChartComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/chart/apex-chart/apex-chart.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/components/chart/apex-chart/apex-chart.service.ts ***!
    \**************************************************************************/

  /*! exports provided: ApexChartService */

  /***/
  function srcAppSharedComponentsChartApexChartApexChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApexChartService", function () {
      return ApexChartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApexChartService =
    /*#__PURE__*/
    function () {
      function ApexChartService() {
        _classCallCheck(this, ApexChartService);

        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ApexChartService, [{
        key: "eventChangeTimeRange",
        value: function eventChangeTimeRange() {
          this.changeTimeRange.emit();
        }
      }, {
        key: "eventChangeSeriesData",
        value: function eventChangeSeriesData() {
          this.changeSeriesData.emit();
        }
      }]);

      return ApexChartService;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ApexChartService.prototype, "changeTimeRange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ApexChartService.prototype, "changeSeriesData", void 0);
    ApexChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ApexChartService);
    /***/
  },

  /***/
  "./src/app/shared/components/index.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/components/index.ts ***!
    \********************************************/

  /*! exports provided: CardModule, BreadcrumbModule */

  /***/
  function srcAppSharedComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./card/card.module */
    "./src/app/shared/components/card/card.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CardModule", function () {
      return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"];
    });
    /* harmony import */


    var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./breadcrumb/breadcrumb.module */
    "./src/app/shared/components/breadcrumb/breadcrumb.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function () {
      return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"];
    });
    /***/

  },

  /***/
  "./src/app/shared/components/spinner/spinkit-css/sk-line-material.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSpinnerSpinkitCssSkLineMaterialScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzYWRyYWpwdXQvYnVpbGQtYW5ndWxhci9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1FQUFBO0VBQ0EsMkRBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxvQkFBQTtFQ0NOO0VEQ0U7SUFDSSw0QkFBQTtJQUNBLG9CQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksNEJBQUE7SUFDQSxvQkFBQTtFQ0FOO0VERUU7SUFDSSw0QkFBQTtJQUNBLG9CQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDREo7O0FESUE7RUFDSSx5Q0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stbGluZS1tYXRlcmlhbCB7XG4gICAgdG9wOiAwICA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnNrLWxpbmUtbWF0ZXJpYWwgLnNrLWNoaWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG4gICAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgICAwJSwgODAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgfVxufVxuXG4jaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xufVxuIiwiLnNrLWxpbmUtbWF0ZXJpYWwge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNrLWxpbmUtbWF0ZXJpYWwgLnNrLWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbiAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIH1cbn1cbiNodHRwLWxvYWRlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuOCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/components/spinner/spinkits.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/components/spinner/spinkits.ts ***!
    \*******************************************************/

  /*! exports provided: Spinkit */

  /***/
  function srcAppSharedComponentsSpinnerSpinkitsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
      return Spinkit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Spinkit = {
      skChasingDots: 'sk-chasing-dots',
      skCubeGrid: 'sk-cube-grid',
      skDoubleBounce: 'sk-double-bounce',
      skRotatingPlane: 'sk-rotationg-plane',
      skSpinnerPulse: 'sk-spinner-pulse',
      skThreeBounce: 'sk-three-bounce',
      skWanderingCubes: 'sk-wandering-cubes',
      skWave: 'sk-wave',
      skLine: 'sk-line-material'
    };
    /***/
  },

  /***/
  "./src/app/shared/components/spinner/spinner.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinner.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedComponentsSpinnerSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FzYWRyYWpwdXQvYnVpbGQtYW5ndWxhci9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iLCIjaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMC43O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/components/spinner/spinner.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
    \****************************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedComponentsSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./spinkits */
    "./src/app/shared/components/spinner/spinkits.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SpinnerComponent =
    /*#__PURE__*/
    function () {
      function SpinnerComponent(router, document) {
        var _this15 = this;

        _classCallCheck(this, SpinnerComponent);

        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = '#2196f3';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            _this15.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            _this15.isSpinnerVisible = false;
          }
        }, function () {
          _this15.isSpinnerVisible = false;
        });
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpinnerComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/spinner/spinner.component.html")).default,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.scss */
      "./src/app/shared/components/spinner/spinner.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-line-material.scss */
      "./src/app/shared/components/spinner/spinkit-css/sk-line-material.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components */
    "./src/app/shared/components/index.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/lib/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/spinner/spinner.component */
    "./src/app/shared/components/spinner/spinner.component.ts");
    /* harmony import */


    var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/chart/apex-chart/apex-chart.component */
    "./src/app/shared/components/chart/apex-chart/apex-chart.component.ts");
    /* harmony import */


    var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/chart/apex-chart/apex-chart.service */
    "./src/app/shared/components/chart/apex-chart/apex-chart.service.ts");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"]],
      exports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _components__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _components__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__["ApexChartComponent"]],
      declarations: [_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"], _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_8__["ApexChartComponent"]],
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_9__["ApexChartService"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      host: 'http://salsoft-api.us-east-1.elasticbeanstalk.com/'
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/asadrajput/build-angular/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!************************!*\
    !*** crypto (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!************************!*\
    !*** stream (ignored) ***!
    \************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map