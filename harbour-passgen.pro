# The name of your app.
# NOTICE: name defined in TARGET has a corresponding QML filename.
#         If name defined in TARGET is changed, following needs to be
#         done to match new name:
#         - corresponding QML filename must be changed
#         - desktop icon filename must be changed
#         - desktop filename must be changed
#         - icon definition filename in desktop file must be changed
TARGET = harbour-passgen

CONFIG += sailfishapp

SOURCES += src/harbour-passgen.cpp

OTHER_FILES += qml/harbour-passgen.qml \
    qml/cover/CoverPage.qml \
    rpm/harbour-passgen.spec \
    rpm/harbour-passgen.yaml \
    harbour-passgen.desktop \
    qml/pages/FieldPage.qml \
    qml/pages/Info.qml \
    qml/pages/About.qml \
    qml/pages/ChoosePage.qml \
    qml/js/1.js \
    qml/crypt.js \
    qml/js/5.js \
    qml/js/2.js \
    qml/js/3.js \
    qml/js/4.js

