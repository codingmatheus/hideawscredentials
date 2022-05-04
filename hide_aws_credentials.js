// ==UserScript==
// @name         Hide AWS credentials
// @namespace    https://console.aws.amazon.com/
// @version      1.0
// @run-at       document-end
// @description  Replaces credentials on the AWS Console
// @author       Matheus Guimaraes | @guimathe
// @include      https://console.aws.amazon.com/*
// @include      https://*.console.aws.amazon.com/*
// ==/UserScript==

(function() {
    'use strict';
    const usernameMenu = document.querySelector("#nav-usernameMenu");
    usernameMenu.style.backgroundColor = "yellow";

    const accountMenu = document.querySelector('[data-testid="awsc-nav-account-menu-button"]');
    accountMenu.style.color = "blue";
    accountMenu.style.fontWeight = "bold";
    accountMenu.style.fontSize = "medium";
    accountMenu.innerHTML = "DEMO";


    const accountDetailMenu = document.querySelector('[data-testid="account-detail-menu"]');
    accountDetailMenu.innerHTML = "DEMO";
})();