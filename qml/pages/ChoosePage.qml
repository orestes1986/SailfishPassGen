import QtQuick 2.0
import Sailfish.Silica 1.0
import Qt.labs.folderlistmodel 1.0

Page {
    id: page00

    FolderListModel {
              id: folderModel
              folder: "../js/"
              nameFilters: ["*.*"]
          }
    Component {
                id: fileDelegate
                Text {
                    text: fileName
                    onTextChanged: {
                        console.debug("Filename:-" + fileName + "-")
                    }
                }
            }
            //model: folderModel
            //delegate: fileDelegate


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
        }
    }
}
