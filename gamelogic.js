// --- PLACEHOLDER VARIABLES --- ///
let screenWidth = 1024; //1024x768
let deviceModel = "windows";

let postHighscores = true;

// pink bird values
let pigDefenceBoost = 50;
let bubbleAntiGravity = 1.8;
let bubbleAntiGravityTime = 2;
let bubbleAntiGravityFloat = -3.3;
let antiGravityMaxVelocity = 10;

let enableMouseOverStates = true;

let rokuDragSensitivity = 0.1;

let levelSelectionMultipleAssets = true;

// TODO: port these code

//those are used for the camera panning on sweepping
//g_mouseDragAttributes = {mouseDragTime = -1, targetDragTime = 0.5, minDragTime = 0.02, lastPressedX = -1, cummulativeDragX = 0, dragFromTouch = false, dragFromMouse  = false}

/*
  needsNewTouchToDrag = will be true when you want the user to release the touch once in order to perform a new one. For example: if the user starts dragging while the camera is not fully at
  slingshot, the dragging will be disabled, and the user must release the touch and try againa when the camera is at the slingshot
*/
/*g_birdDragOnTouchAttributes = {	enabled = true, dragging = false, lastCursorX = -1, lastCursorY = -1,
								previousTouchCount = 0, elapsedTimeAtRest = 0, targetRestTime = 0.01,
								dragStartPosPhysics = {x= null, y= null}, dragLastPosPhysics = {x = null, y=null},
								touchOneID=null,shootMinLength = 3, disabledForBirdSpecialty=false, needsNewTouchToDrag=false}
								*/
//enableBirdDragOnTouch = true

//gesturePausePage = {enabled = true, cursorReferenceX = null, cursorReferenceY = null, dragLength = 0, currentButtonSelected = null,   }

//gesturePausePageEnablingFlags = {enablePage=true, simulateTouchOnWindows=false}

let enableDebugTextField = false;

//newEpisodeScreen = {enabled=true, lastSetEnabled = true}

let LP6_PAGE2_LOCKED = false;
let LP6_PAGE3_LOCKED = false;

if (releaseBuild == true) {
    showEditor = false;
    postHighscores = true;
}

let tapRadius = (15 * screenWidth) / 480;

// queue for achievements  to be unlocked
//achievementUnlockQueue = ();

// Filled from C++
//imagePath = "images";
//fontPath = "fonts";
//audioPath = "audio";
//localizationPath = "localization";
//levelPath = "levels";

// relative to the screen width
let cameraPanAreaRatio = 0.01;

//let cursorNames = {"CURSOR_HAND_POINT", "CURSOR_HAND_HOVER", "CURSOR_HAND_GRAB", "CURSOR_HAND_CLICK"};

//let treasureChestAttributes = {timeBetweenKeys=-1, maxTimeBetweenKeys = 0.5, keys = {"O", "P", "E", "N"}, correctKeysCount = 0};
/*if (deviceModel == "roku") {
let treasureChestAttributes.keys = { "KEY_GAMINlet B" };
}*/

let currentCursorName = "CURSOR_HAND_POINT";
//for debugging only
let cursorIndex = 1;

//found by experimenting
//let restartButtonPos = {x = 113, y = 36};
//let restartButtonScale = 1;
//let restartButtonCollisionRadius = 30;

//doesMouseClickSetsCount = on windows it does, so remember to change that to true on windows
//let mouseOrTouchStates = {isUsingMouse = false, lastCursorPosition = {x = null, y = null}, doesMouseClickSetsCount = null, releaseTouchTime=-1, fullScreen = true};

//let registrationURLs = {};

/*
let registrationKeys = {fullGame = "shop-full-abc-pc-test"}

let updateCheckFlags = {enabled = false, updateAvailable = false, updateCheckCalled = false}
*/
//let updateCheckFlags.enabled = eupdateCheckEnabled

let sound_next_bird = "bird_next_military"; //sound played when a new bird is loaded to the slinghsot
let sound_level_clear = "level_clear_military"; //sound played when level is completed (bird cheer)
let sound_level_start = "level_start_military"; //sound played at level start
let sound_level_failed = "level_failed_piglets"; //sound played on level fail (pig laugh)
let sound_birds = "bird_misc"; //bird idle sounds
let sound_pigs = "piglette"; //pig idle sounds

if (releaseBuild == true) {
    let /*registrationURLs.*/ validationURL =
            "http://drm-pc.angrybirdsgame.com/validateKey/?";
    let /*registrationURLs.*/ registrationURL =
            "http://drm-pc.angrybirdsgame.com/consumeKey/?";
    //let registrationKeys = {fullGame = "SABC2011FL"}
} else {
    let /*registrationURLs.*/ validationURL =
            "http://dev.angrybirds.com/drm/validateKey/?";
    let /*registrationURLs.*/ registrationURL =
            "http://dev.angrybirds.com/drm/consumeKey/?";
    //let registrationKeys = {fullGame = "shop-full-abc-pc-test"}
}

function createStartUpAssets() {
    if (deviceModel == "windows") {
        let cameraProfileList = [deviceModel, "osx", "ipad", "iphone"];
    } else if (deviceModel == "osx") {
        let cameraProfileList = [deviceModel, "windows", "ipad", "iphone"];
    } else if (deviceModel == "roku") {
        let cameraProfileList = [
            deviceModel,
            "osx",
            "windows",
            "ipad",
            "iphone"
        ];
    } else {
        let cameraProfileList = [deviceModel, "iphone"];
    }

    let variant = "full";

    // Create urls
    let APP_STORE_FULL_VERSION_URL = `http://www.angrybirds.com/redirect.php?device=${deviceModel}&type=full`;
    let ANDROID_MARKET_FULL_VERSION_URL =
        "http://www.angrybirds.com/redirect.php?device=android&variant=litebeta2&type=full";
    let REPORT_BUG_URL = `http://www.angrybirds.com/redirect.php?device=${deviceModel}&variant=litebeta2&type=reportbug`;
    let ANGRY_BIRDS_TRAILER_URL = `http://www.angrybirds.com/redirect.php?device=${deviceModel}&type=trailer`;
    let OVI_STORE_URL = "http://www.angrybirds.com/redirect.php?device=N900";
    //let OVI_STORE_URL_S60 = "http://lr.ovi.mobi/store/10042237_AngryBirds"; // Redirect not allowed by Nokia
    let OVI_STORE_URL_S60 =
        "http://www.angrybirds.com/redirect.php?device=s60&variant=lite&type=full";
    let OVI_STORE_MORE_GAMES_URL_S60 =
        "http://www.angrybirds.com/redirect.php?device=s60&variant=full&type=moregames";
    let ROVIO_IN_OVI_STORE_URL = "http://store.ovi.com/publisher/RovioMobile/";
    let LP1_IN_OVI_STORE_URL =
        "http://www.angrybirds.com/redirect.php?device=N900&type=lp1";
    let LP2_IN_OVI_STORE_URL =
        "http://www.angrybirds.com/redirect.php?device=N900&type=lp2";
    let FACEBOOK_URL = "http://facebook.angrybirds.com/";
    let TWITTER_URL = "http://twitter.angrybirds.com/";
    let RIO_CONTEST_URL = `http://www.angrybirds.com/redirect.php?device=${deviceModel}&product=angrybirds&type=riocontest`;
    let BOTO_URL =
        "https://youtube.com/playlist?list=PLRkf1bnaZwrcJtNA1i-GT_3VGrTqaHVMP&si=9AwL8FiYgemUI4YL";

    //_G.res.createTextGroupSet(localizationPath .. "/TEXTS_BASIC.dat")
    //loadImages( { "SPLASHES" } )

    // if we want to play audio during the startup scene

    //ll_G.res.createAudioOutput(2, 16, 44100)

    if (deviceModel != "roku") {
        if (/*settings.*/ fullScreen == null) {
            let /*settings.*/ fullScreen = true;
        } else {
            //the game already starts in full screen mode by default, so if it is in full screen, we don't make an extra call
            if (/*settings.*/ fullScreen == false) {
                setFullScreenMode(/*settings.*/ fullScreen);

                let t_minimumScreenWidth = 1024;
                let t_minimumScreenHeight = 600;
                /*
				if (settings.screenWidth == null) {
				  settings.screenWidth = t_minimumScreenWidth;
				}
				
				if (settings.screenHeight == null) {
					/*settings.screenHeight = t_minimumScreenHeight;
				}*/
                /*
				let t_width = _G.math.max(t_minimumScreenWidth, settings.screenWidth)
				let t_height = _G.math.max(t_minimumScreenHeight, settings.screenHeight)
				*/
                //setResolution(t_width, t_height)
            }
        }
    }

    /*
	if (deviceModel == "windows") and (registrationEnabled == true) {
		if (settings.license != null) {
			local t_fullGameKeyIndex = getIndexInTable(settings.license.registeredKeyTypes, g_registrationKeys.fullGame)
			g_isGameUnlocked = t_fullGameKeyIndex > 0 and areDeviceIDsEqual(settings.license.hardwareID, getDeviceID())
		} else {
			g_isGameUnlocked = false
		}
		if settings.license == null {
			settings.license = {}
			settings.license.registeredKeyTypes = {}
			settings.license.hardwareID = getDeviceID()
		}
	}
	*/
    /*
	settings.platform = {}
	settings.platform.device = deviceModel
	settings.platform.hardwareID = getDeviceID()
	
	highscores.platform = {}
	highscores.platform.device = deviceModel
	highscores.platform.hardwareID = getDeviceID()
	*/
    /*
	if deviceModel == "windows" and g_updateCheckFlags.enabled == true {
		
		if settings.updateNotification == null {
			settings.updateNotification = {}
			settings.updateNotification.updateNotified = false
			settings.updateNotification.gameVersionOnLastWarning = gameVersionNumber
		else
			//user has just updated the game, or installed another version manually (not necessarily newer)
			if settings.updateNotification.gameVersionOnLastWarning ~= gameVersionNumber {
				settings.updateNotification.updateNotified = false
				settings.updateNotification.gameVersionOnLastWarning = gameVersionNumber
			}
		}
	}
	*/
}
