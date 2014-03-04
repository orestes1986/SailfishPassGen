/*
  Copyright (C) 2013 Jolla Ltd.
  Contact: Thomas Perl <thomas.perl@jollamobile.com>
  All rights reserved.

  You may use this file under the terms of BSD license as follows:

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the Jolla Ltd nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR CONTRIBUTORS BE LIABLE FOR
  ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import QtQuick 2.0
import Sailfish.Silica 1.0
import "../crypt.js" as CrptMyne

Page {
    id: page01

    // To enable PullDownMenu, place our content in a SilicaFlickable
    SilicaFlickable {
       // header: PageHeader {
        //    title: "Generate Password"
       // }
        anchors.fill: parent

        // PullDownMenu and PushUpMenu must be declared in SilicaFlickable, SilicaListView or SilicaGridView
        PullDownMenu {
            MenuItem {
                text: "About"//Droped Down Menu
                signal mySignalEmitted
                onClicked: {
                    pageStack.push(Qt.resolvedUrl("About.qml"))
                }
            }
            MenuItem {
                text: "Info"//Droped Down Menu
                signal mySignalEmitted
                onClicked: {
                    pageStack.push(Qt.resolvedUrl("Info.qml"))
                }
            }
            MenuItem {
                text: "Generate password"//Droped Down Menu
                signal mySignalEmitted
                onClicked: {
                    onClicked:outTxt.text =  CrptMyne.func(userTxt.text, serviceTxt.text, timesTxt.text, maxLenTxt.text, unCharTxt.text)
                }
            }
        }
        // Tell SilicaFlickable the height of its content.
        contentHeight: column.height
        // Place our content in a Column.  The PageHeader is always placed at the top
        // of the page, followed by our content.
        Column {
            id: column
            width: page01.width-1
            spacing: Theme.paddingLarge
            PageHeader {
                title: "Fill in the fields"
            }
            Label{
                id: userLbl
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
                height: 1
                width: page01.width-1
                text: "Your insignia"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            TextField{
                id: userTxt
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
               // height: 50
                width: page01.width-1
                text: ""
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            Label{
                id: serviceLbl
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
                height: 1
                width: page01.width-1
                text: "Service"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            TextField{
                id: serviceTxt
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
               // height: 50
                width: page01.width-1
                text: ""
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            Label{
                id: timesLbl
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
                height: 1
                width: page01.width-1
                text: "This is my n'th password"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            TextField{
                id: timesTxt
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
               // height: 50
                width: page01.width-1
                text: ""
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            Label{
                id: maxLenLbl
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
                height: 1
                width: page01.width-1
                text: "Maximum length (<16)"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            TextField{
                id: maxLenTxt
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
               // height: 50
                width: page01.width-1
                text: ""
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            Label{
                id: unCharLbl
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
                height: 1
                width: page01.width-1
                text: "Unwanted characters"
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            TextField{
                id: unCharTxt
                x: Theme.paddingSmall
                //y: Theme.paddingSmall
               // height: 50
                width: page01.width-1
                text: ""
                color: Theme.secondaryColor
                font.pixelSize: Theme.fontSizeSmall
            }
            TextField{
                id: outTxt
                x: Theme.paddingSmall
                y: Theme.paddingSmall
                width: page01.width-1
                text: "Your password"
                color: Theme.primaryColor
                font.pixelSize: Theme.fontSizeMedium
            }
        }
    }
}
