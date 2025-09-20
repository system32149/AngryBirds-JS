// vim: nowrap
// --- PLACEHOLDER VARIABLES --- ///
let screenWidth = 1024; //1024x768
let screenHeight = 768; //1024x768
let deviceModel = "windows";

let registrationEnabled = false;
let postHighscores = true;

// Canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// SETTINGS Object
let settings = {
    fullscreen: false,
    screenWidth: screenWidth,
    screenHeight: 768
];
let license = [
    registeredKeyTypes: null,
    hardwareID: null
];
let platform = [
    device: null,
    hardwareID: null
];
let highscores_platform = [
    device: null,
    hardwareID: null
];
let updateNotification = [
    updateNotified: null,
    gameVersionOnLastWarning: null
];

// REGISTRATIONSURL Object
let registrationURLs = [
    registrationURL: "",
    validationURL: ""
];

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
    registrationURLs.validationURL =
        "http://drm-pc.angrybirdsgame.com/validateKey/?";
    registrationURLs.registrationURL =
        "http://drm-pc.angrybirdsgame.com/consumeKey/?";
    //let registrationKeys = {fullGame = "SABC2011FL"}
} else {
    registrationURLs.validationURL =
        "http://dev.angrybirds.com/drm/validateKey/?";
    registrationURLs.registrationURL =
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
        if (settings.fullScreen == null) {
            settings.fullScreen = true;
        } else {
            //the game already starts in full screen mode by default, so if it is in full screen, we don't make an extra call
            if (settings.fullScreen == false) {
                setFullScreenMode(settings.fullScreen);

                let t_minimumScreenWidth = 1024;
                let t_minimumScreenHeight = 600;
                if (settings.screenWidth == null) {
                    settings.screenWidth = t_minimumScreenWidth;
                }

                if (settings.screenHeight == null) {
                    settings.screenHeight = t_minimumScreenHeight;
                }
                /*
				let t_width = _G.math.max(t_minimumScreenWidth, settings.screenWidth);
				let t_height = _G.math.max(t_minimumScreenHeight, settings.screenHeight);
				*/
                //setResolution(t_width, t_height)
            }
        }
    }

    if (deviceModel == "windows" && registrationEnabled == true) {
        if (settings.license != null) {
            //local t_fullGameKeyIndex = getIndexInTable(settings.license.registeredKeyTypes, g_registrationKeys.fullGame)
            // TODO: use proper code
            let isGameUnlocked = 1; /*t_fullGameKeyIndex > 0 and areDeviceIDsEqual(settings.license.hardwareID, getDeviceID())*/
        } else {
            let isGameUnlocked = false;
        }
        if (settings.license == null) {
            settings.license = null;
            license.registeredKeyTypes = null;
            settings.license.hardwareID = getDeviceID();
        }
    }
    platform.device = deviceModel;
    platform.hardwareID = getDeviceID();

    highscores_platform.device = deviceModel;
    highscores_platform.hardwareID = getDeviceID();
    if (deviceModel == "windows" && g_updateCheckFlags.enabled == true) {
        if (settings.updateNotification == null) {
            updateNotification.updateNotified = false;
            updateNotification.gameVersionOnLastWarning = gameVersionNumber;
        } else {
            //user has just updated the game, or installed another version manually (not necessarily newer)
            if (
                updateNotification.gameVersionOnLastWarning != gameVersionNumber
            ) {
                updateNotification.updateNotified = false;
                updateNotification.gameVersionOnLastWarning = gameVersionNumber;
            }
        }
    }
}

function selectAssetProfile() {
    // Default profile is iPhone because it's probably the most up to date
    let profileName = "480x320";

    switch (deviceModel) {
        case "iphone":
        case "iphone4":
            profileName = "480x320";
            /*
		if (isLiteVersion) {
			profileName = profileName .. "_lite";
		}*/
            break;
        case "ipad":
            profileName = "1024x768";
            /*
		if isLiteVersion then
			profileName = profileName .. "_lite"
		end*/
            break;
        case "n900":
            profileName = "864x480";
            /*
		if isLiteVersion then
			profileName = profileName .. "_lite"
		end*/
            break;
        case "s60":
            profileName = "640x360";

            // if isLiteVersion then
            // profileName = profileName .. "_lite"
            // end
            break;
        case "roku":
            profileName = "roku";

            // if screenHeight <= 576 then -- PAL resolution is 720x576
            // profileName = "roku_low"
            // end
            break;
        case "windows":
        case "osx":
            profileName = "1024x768_pc";
            /*
		if isLiteVersion then
			profileName = profileName .. "_lite"
		end*/
            break;
        case "palm":
            // Palm Pre
            if (screenWidth >= 480) {
                profileName = "480x320";
                /*
			if isLiteVersion then
				profileName = profileName .. "_lite_palm"
			end*/
                // Palm Pixi
            } else {
                profileName = "400x320";
                /*
			if isLiteVersion then
				profileName = profileName .. "_lite"
			end*/
            }
            break;
        case "android":
            if (screenHeight < 480) {
                profileName = "480x320";
                /*
			if isLiteVersion then
				profileName = profileName .. "_lite"
			end*/
            } else if (screenHeight < 800) {
                profileName = "864x480";
                /*
			if isLiteVersion then
				profileName = profileName .. "_lite"
			end
			if isBetaVersion then
				profileName = profileName .. "_beta"
			end*/
            } else {
                profileName = "1280x800";
                /*
			if isLiteVersion then
				profileName = profileName .. "_lite"
			end*/
            }
            break;
        case "pc_build":
            profileName = "pc_build";
            /*
		if isLiteVersion then
			profileName = profileName .. "_lite"
		end*/
            break;
    }
    return profileName;
}

function selectFontProfile() {
    // Default profile is iPhone because it's probably the most up to date
    let profileName = "480x320";

    switch (deviceModel) {
        case "iphone":
        case "iphone4":
            profileName = "480x320";
            break;
        case "ipad":
            profileName = "1024x768";
            break;
        case "bada":
        case "n900":
            profileName = "864x480";
            break;
        case "s60":
            profileName = "640x360";
            break;
        case "windows":
            profileName = "1024x768";
            break;
        case "palm":
            if (screenWidth > 480) {
                profileName = "1024x768";
            } else if (screenWidth == 480) {
                profileName = "480x320";
            } else {
                // Palm Pixi
                profileName = "400x320";
                /*
			if isLiteVersion then
				profileName = profileName .. "_lite"
			end*/
            }
            break;
        case "android":
            if (screenHeight < 480) {
                profileName = "320x240";
            } else if (screenHeight < 800) {
                profileName = "480x320";
            } else {
                profileName = "864x480";
            }
            break;
    }
    return profileName;
}
/*
function loadImages(groups)

	for g = 1, #groups do
		local profileName = selectAssetProfile( groups[g] )
		if assetLoadList[profileName] ~= nil then
			local files = assetLoadList[profileName][groups[g]]
			if files ~= nil then
				for i=1, #files do
					_G.res.createSpriteSheet(imagePath .. "/" .. profileName .. "/" .. files[i])
				end
			end
		end
	end
end

function loadCompoSprites(groups)
	for g = 1, #groups do
		local profileName = selectAssetProfile( groups[g] )
		if assetLoadList[profileName] ~= nil then
			local files = assetLoadList[profileName][groups[g]]
			if files ~= nil then
				for i=1, #files do
					_G.res.createCompoSpriteSet(imagePath .. "/" .. profileName .. "/" .. files[i])
				end
			end
		end
	end
end

function releaseImages(groups)

	for g = 1, #groups do
		local profileName = selectAssetProfile( groups[g] )
		if assetLoadList[profileName] ~= nil then
			local files = assetLoadList[profileName][groups[g]]
			if files ~= nil then
				for i=1, #files do
					_G.res.releaseSpriteSheet(imagePath .. "/" .. profileName .. "/" .. files[i])
				end
			end
		end
	end
end

function releaseCompoSprites(groups)
	for g = 1, #groups do
		local profileName = selectAssetProfile( groups[g] )
		if assetLoadList[profileName] ~= nil then
			local files = assetLoadList[profileName][groups[g]]
			if files ~= nil then
				for i=1, #files do
					_G.res.releaseCompoSpriteSet(imagePath .. "/" .. profileName .. "/" .. files[i])
				end
			end
		end
	end
end

function loadFonts()
	local profileName = selectFontProfile()
	fontBasic = _G.res.getString("TEXTS_BASIC", "FONT_BASIC")
	fontMenu = _G.res.getString("TEXTS_BASIC", "FONT_MENU")
	
	_G.res.createBitmapFont(fontPath .. "/" .. profileName .. "/" .. fontBasic .. ".dat")
	_G.res.createBitmapFont(fontPath .. "/" .. profileName .. "/" .. fontMenu .. ".dat")
	_G.res.createBitmapFont(fontPath .. "/" .. profileName .. "/FONT_SCORE.dat")
	_G.res.createBitmapFont(fontPath .. "/" .. profileName .. "/FONT_BASIC_IPHONE.dat")
	_G.res.createBitmapFont(fontPath .. "/" .. profileName .. "/FONT_BIG_NUMBERS.dat")
	_G.res.createBitmapFont(fontPath .. "/" .. profileName .. "/FONT_LS_SMALL.dat")
	
end

currentGFXSet = nil

function loadThemeGraphics(name)
	print (" ::  LoadThemeGraphics() \n")
	local themeName = blockTable.themes[name].graphicSetName
	
	if(themeName == currentGFXSet) then
		print(" - - GFX set is the same, not loading or releasing graphics\n")
		return
	end
	
	if(currentGFXSet ~= nil) then
		print("- - Releasing previous graphics set : "..currentGFXSet.."\n")
		releaseImages({currentGFXSet})
		releaseCompoSprites({currentGFXSet.."_COMPOSPRITES"})
	end
	
	-- update current set value
	currentGFXSet = themeName
	
	print(" -- THEME GRAPHICS SET NAME = "..themeName.."\n")
	--[[
	for k,v in _G.pairs(blockTable.themes) do
		if(k ~= "settings" and v.graphicSetName ~= themeName) then -- and v.graphicSetName ~= oldGFXSet) then
			print(" - releasing theme graphics, name = "..k.."\n" ) 
			print(" - graphicSetName = "..(v.graphicSetName).."\n")
			releaseImages({v.graphicSetName})
			releaseCompoSprites({v.graphicSetName.."_COMPOSPRITES"})
		end
	end]]
	
	loadImages({currentGFXSet})
	loadCompoSprites({currentGFXSet.."_COMPOSPRITES"})

end*/

/*
function createAssets()

	-- uncomment for japanese
	--_G.res.loadLocale("TEXTS_BASIC", "it_IT")
	--_G.res.useLocale("it_IT")	



	if deviceModel == "roku" then
		loadImages( { "INGAME", "OTHER", "CURSORS" } )
		if screenHeight > 576 then
			loadImages( {"OTHER_2"} )
		else
			_G.res.createSpriteSheet(imagePath .. "/low/MENU_SHEET_1.dat")
		end
	else
		loadImages( { "INGAME", "OTHER", "OTHER_2", "CURSORS", "LEVELSELECTION", "GOLDEN_EGGS", "THEME_1", "THEME_2", "THEME_3", "THEME_4", "THEME_5", "THEME_6", "THEME_7", "THEME_8", "THEME_9", "THEME_10" } )
	end
	
	--loadCompoSprites( { "COMPOSPRITES" } )
	loadCompoSprites( { "TUTORIALS_COMPOSPRITES" } )
	
	loadFonts()
	
	if deviceModel == "s60" then
		defaultMenuFont = fontBasic
	else
		defaultMenuFont = fontMenu
	end
	setFont(defaultMenuFont)
	
	-- _G.res.createAudio(audioPath .. "/sfx/bad shot a1.wav", "bad shot a1")
	-- _G.res.createAudio(audioPath .. "/sfx/bad shot a2.wav", "bad shot a2")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a1.wav", "bird 01 collision a1")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a2.wav", "bird 01 collision a2")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a3.wav", "bird 01 collision a3")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a4.wav", "bird 01 collision a4")
	
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a1_low.wav", "bird 01 collision a1_low")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a2_low.wav", "bird 01 collision a2_low")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a3_low.wav", "bird 01 collision a3_low")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 collision a4_low.wav", "bird 01 collision a4_low")
	
	
	_G.res.createAudio(audioPath .. "/sfx/bird 01 flying.wav", "bird_01_flying")
	_G.res.createAudio(audioPath .. "/sfx/bigbrother_fly.wav", "big_brother_flying")
	_G.res.createAudio(audioPath .. "/sfx/bigbrother_awakens.wav", "big_brother_awakens")
	
	_G.res.createAudio(audioPath .. "/sfx/bird 01 select.wav", "bird_01_select")
	_G.res.createAudio(audioPath .. "/sfx/bigbrother_select.wav", "big_brother_select")
	_G.res.createAudio(audioPath .. "/sfx/bird 01 unselect.wav", "bird_01_unselect")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 collision a1.wav", "bird 02 collision a1")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 collision a2.wav", "bird 02 collision a2")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 collision a3.wav", "bird 02 collision a3")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 collision a4.wav", "bird 02 collision a4")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 collision a5.wav", "bird 02 collision a5")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 flying.wav", "bird_02_flying")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 select.wav", "bird_02_select")
	_G.res.createAudio(audioPath .. "/sfx/bird 02 unselect.wav", "bird_02_unselect")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 collision a1.wav", "bird 03 collision a1")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 collision a2.wav", "bird 03 collision a2")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 collision a3.wav", "bird 03 collision a3")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 collision a4.wav", "bird 03 collision a4")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 collision a5.wav", "bird 03 collision a5")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 flying.wav", "bird_03_flying")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 select.wav", "bird_03_select")
	_G.res.createAudio(audioPath .. "/sfx/bird 03 unselect.wav", "bird_03_unselect")
	_G.res.createAudio(audioPath .. "/sfx/bird 04 flying.wav", "bird_04_flying")
	_G.res.createAudio(audioPath .. "/sfx/bird 04 select.wav", "bird_04_select")
	_G.res.createAudio(audioPath .. "/sfx/bird 04 unselect.wav", "bird_04_unselect")
	_G.res.createAudio(audioPath .. "/sfx/bird 04 collision a1.wav", "bird 04 collision a1")
	_G.res.createAudio(audioPath .. "/sfx/bird 04 collision a2.wav", "bird 04 collision a2")
	_G.res.createAudio(audioPath .. "/sfx/bird 04 collision a3.wav", "bird 04 collision a3")
	_G.res.createAudio(audioPath .. "/sfx/bird 04 collision a4.wav", "bird 04 collision a4")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 collision a1.wav", "bird 05 collision a1")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 collision a2.wav", "bird 05 collision a2")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 collision a3.wav", "bird 05 collision a3")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 collision a4.wav", "bird 05 collision a4")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 collision a5.wav", "bird 05 collision a5")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 flying.wav", "bird_05_flying")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 select.wav", "bird_05_select")
	_G.res.createAudio(audioPath .. "/sfx/bird_06_flying.wav", "bird_06_flying")
	_G.res.createAudio(audioPath .. "/sfx/boomerang_select.wav", "boomerang_select")
	_G.res.createAudio(audioPath .. "/sfx/bird 05 unselect.wav", "bird_05_unselect")
    --_G.res.createAudio(audioPath .. "/sfx/bird 06 flying.wav", "bird_06_flying")
	-- _G.res.createAudio(audioPath .. "/sfx/bird 07 flying.wav", "bird_07_flying")
	-- _G.res.createAudio(audioPath .. "/sfx/bird 08 flying.wav", "bird_08_flying")
	-- _G.res.createAudio(audioPath .. "/sfx/bird 09 flying.wav", "bird_09_flying")
	-- _G.res.createAudio(audioPath .. "/sfx/bird 10 flying.wav", "bird_10_flying")
	-- _G.res.createAudio(audioPath .. "/sfx/bird 11 flying.wav", "bird_11_flying")

	_G.res.createAudio(audioPath .. "/sfx/bird misc a1.wav", "bird_misc_a1")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a2.wav", "bird_misc_a2")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a3.wav", "bird_misc_a3")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a4.wav", "bird_misc_a4")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a5.wav", "bird_misc_a5")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a6.wav", "bird_misc_a6")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a7.wav", "bird_misc_a7")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a8.wav", "bird_misc_a8")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a9.wav", "bird_misc_a9")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a10.wav", "bird_misc_a10")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a11.wav", "bird_misc_a11")
	_G.res.createAudio(audioPath .. "/sfx/bird misc a12.wav", "bird_misc_a12")

	_G.res.createAudio(audioPath .. "/sfx/bird destroyed.wav", "bird_destroyed")
	--_G.res.createAudio(audioPath .. "/sfx/bird flying generic loop 2.wav", "bird flying generic loop 2")
	--_G.res.createAudio(audioPath .. "/sfx/bird flying generic loop.wav", "bird flying generic loop")
	--_G.res.createAudio(audioPath .. "/sfx/bird next a1.wav", "bird next a1")
	--_G.res.createAudio(audioPath .. "/sfx/bird next a2.wav", "bird next a2")
	--_G.res.createAudio(audioPath .. "/sfx/bird next a3.wav", "bird next a3")
	_G.res.createAudio(audioPath .. "/sfx/bird next military a1.wav", "bird next military a1")
	_G.res.createAudio(audioPath .. "/sfx/bird next military a2.wav", "bird next military a2")
	_G.res.createAudio(audioPath .. "/sfx/bird next military a3.wav", "bird next military a3")
	--_G.res.createAudio(audioPath .. "/sfx/bird shot.wav", "bird_shot")
	_G.res.createAudio(audioPath .. "/sfx/good_shot_a1.wav", "good shot a1")
	_G.res.createAudio(audioPath .. "/sfx/good_shot_a2.wav", "good shot a2")
	_G.res.createAudio(audioPath .. "/sfx/good_shot_a3.wav", "good shot a3")
	_G.res.createAudio(audioPath .. "/sfx/bird shot-a1.wav", "bird shot a1")
	_G.res.createAudio(audioPath .. "/sfx/bird shot-a2.wav", "bird shot a2")
	_G.res.createAudio(audioPath .. "/sfx/bird shot-a3.wav", "bird shot a3")
	--_G.res.createAudio(audioPath .. "/sfx/level clear a1.wav", "level clear a1")
	--_G.res.createAudio(audioPath .. "/sfx/level clear a2.wav", "level clear a2")
	_G.res.createAudio(audioPath .. "/sfx/level clear military a1.mp3", "level clear military a1")
	_G.res.createAudio(audioPath .. "/sfx/level clear military a2.mp3", "level clear military a2")
	--_G.res.createAudio(audioPath .. "/sfx/level failed a1.wav", "level failed a1")
	--_G.res.createAudio(audioPath .. "/sfx/level failed a2.wav", "level failed a2")
	_G.res.createAudio(audioPath .. "/sfx/level failed piglets a1.mp3", "level failed piglets a1")
	_G.res.createAudio(audioPath .. "/sfx/level failed piglets a2.mp3", "level failed piglets a2")
	--_G.res.createAudio(audioPath .. "/sfx/level start a1.wav", "level start a1")
	--_G.res.createAudio(audioPath .. "/sfx/level start a2.wav", "level start a2")
	_G.res.createAudio(audioPath .. "/sfx/level start military a1.mp3", "level start military a1")
	_G.res.createAudio(audioPath .. "/sfx/level start military a2.mp3", "level start military a2")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a1.wav", "light collision a1")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a2.wav", "light collision a2")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a3.wav", "light collision a3")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a4.wav", "light collision a4")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a5.wav", "light collision a5")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a6.wav", "light collision a6")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a7.wav", "light collision a7")
	_G.res.createAudio(audioPath .. "/sfx/ice light collision a8.wav", "light collision a8")
	_G.res.createAudio(audioPath .. "/sfx/light damage a1.wav", "light damage a1")
	_G.res.createAudio(audioPath .. "/sfx/light damage a2.wav", "light damage a2")
	_G.res.createAudio(audioPath .. "/sfx/light damage a3.wav", "light damage a3")
	_G.res.createAudio(audioPath .. "/sfx/light destroyed a1.wav", "light destroyed a1")
	_G.res.createAudio(audioPath .. "/sfx/light destroyed a2.wav", "light destroyed a2")
	_G.res.createAudio(audioPath .. "/sfx/light destroyed a3.wav", "light destroyed a3")
	_G.res.createAudio(audioPath .. "/sfx/light rolling.wav", "light_rolling")
	_G.res.createAudio(audioPath .. "/sfx/menu back.wav", "menu_back")
	_G.res.createAudio(audioPath .. "/sfx/menu confirm.wav", "menu_confirm")
	_G.res.createAudio(audioPath .. "/sfx/menu select.wav", "menu_select") -- is this used anywhere?
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a1.wav", "piglette collision a1")
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a2.wav", "piglette collision a2")
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a3.wav", "piglette collision a3")
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a4.wav", "piglette collision a4")
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a5.wav", "piglette collision a5")
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a6.wav", "piglette collision a6")
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a7.wav", "piglette collision a7")
	_G.res.createAudio(audioPath .. "/sfx/piglette collision a8.wav", "piglette collision a8")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a1.wav", "piglette damage a1")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a2.wav", "piglette damage a2")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a3.wav", "piglette damage a3")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a4.wav", "piglette damage a4")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a5.wav", "piglette damage a5")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a6.wav", "piglette damage a6")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a7.wav", "piglette damage a7")
	_G.res.createAudio(audioPath .. "/sfx/piglette damage a8.wav", "piglette damage a8")
	_G.res.createAudio(audioPath .. "/sfx/piglette destroyed.wav", "piglette_destroyed")
	_G.res.createAudio(audioPath .. "/sfx/pillar_break_1.mp3", "pillar_break_1")
	_G.res.createAudio(audioPath .. "/sfx/pillar_break_1.mp3", "pillar_break_2")
	_G.res.createAudio(audioPath .. "/sfx/rock collision a1.wav", "rock collision a1")
	_G.res.createAudio(audioPath .. "/sfx/rock collision a2.wav", "rock collision a2")
	_G.res.createAudio(audioPath .. "/sfx/rock collision a3.wav", "rock collision a3")
	_G.res.createAudio(audioPath .. "/sfx/rock collision a4.wav", "rock collision a4")
	_G.res.createAudio(audioPath .. "/sfx/rock collision a5.wav", "rock collision a5")
	_G.res.createAudio(audioPath .. "/sfx/rock damage a1.wav", "rock damage a1")
	_G.res.createAudio(audioPath .. "/sfx/rock damage a2.wav", "rock damage a2")
	_G.res.createAudio(audioPath .. "/sfx/rock damage a3.wav", "rock damage a3")
	_G.res.createAudio(audioPath .. "/sfx/rock destroyed a1.wav", "rock destroyed a1")
	_G.res.createAudio(audioPath .. "/sfx/rock destroyed a2.wav", "rock destroyed a2")
	_G.res.createAudio(audioPath .. "/sfx/rock destroyed a3.wav", "rock destroyed a3")
	_G.res.createAudio(audioPath .. "/sfx/rock rolling.wav", "rock_rolling")
	_G.res.createAudio(audioPath .. "/sfx/special boost.wav", "special_boost")
	_G.res.createAudio(audioPath .. "/sfx/special egg explosion.wav", "special_explosion")
	_G.res.createAudio(audioPath .. "/sfx/cannon_shot_02.mp3", "cannon_shot_02")
	_G.res.createAudio(audioPath .. "/sfx/special group.wav", "special_egg")
	_G.res.createAudio(audioPath .. "/sfx/special egg.wav", "special_group")
	_G.res.createAudio(audioPath .. "/sfx/wood collision a1.wav", "wood collision a1")
	_G.res.createAudio(audioPath .. "/sfx/wood collision a2.wav", "wood collision a2")
	_G.res.createAudio(audioPath .. "/sfx/wood collision a3.wav", "wood collision a3")
	_G.res.createAudio(audioPath .. "/sfx/wood collision a4.wav", "wood collision a4")
	_G.res.createAudio(audioPath .. "/sfx/wood collision a5.wav", "wood collision a5")
	_G.res.createAudio(audioPath .. "/sfx/wood collision a6.wav", "wood collision a6")
	_G.res.createAudio(audioPath .. "/sfx/wood damage a1.wav", "wood damage a1")
	_G.res.createAudio(audioPath .. "/sfx/wood damage a2.wav", "wood damage a2")
	_G.res.createAudio(audioPath .. "/sfx/wood damage a3.wav", "wood damage a3")
	_G.res.createAudio(audioPath .. "/sfx/wood destroyed a1.wav", "wood destroyed a1")
	_G.res.createAudio(audioPath .. "/sfx/wood destroyed a2.wav", "wood destroyed a2")
	_G.res.createAudio(audioPath .. "/sfx/wood destroyed a3.wav", "wood destroyed a3")
	_G.res.createAudio(audioPath .. "/sfx/wood rolling.wav", "wood_rolling")
	_G.res.createAudio(audioPath .. "/sfx/balloon_pop.wav", "balloon_pop")
	
	-- new
	_G.res.createAudio(audioPath .. "/sfx/bird pushing egg out.wav", "bird_pushing_egg_out")
	--_G.res.createAudio(audioPath .. "/sfx/bird releaved.wav", "bird_releaved")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette sneezing.wav", "piglette_sneezing")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette snoring a1.wav", "piglette snoring a1")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette snoring a2.wav", "piglette snoring a2")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette snoring a3.wav", "piglette snoring a3")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette snoring a4.wav", "piglette snoring a4")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette snoring a5.wav", "piglette snoring a5")
	_G.res.createAudio(audioPath .. "/sfx/slingshot streched.wav", "slingshot_stretched")
	-- _G.res.createAudio(audioPath .. "/sfx/special tweat.wav", "special_tweat")
	_G.res.createAudio(audioPath .. "/sfx/tnt box explodes.wav", "tnt_explodes")
	_G.res.createAudio(audioPath .. "/sfx/boomerang_swish.wav", "boomerang_swish")
	_G.res.createAudio(audioPath .. "/sfx/boomerang_activate.wav", "boomerang_activate")
	_G.res.createAudio(audioPath .. "/sfx/trampoline.wav", "trampoline")
	
	_G.res.createAudio(audioPath .. "/sfx/redbird_yell01.wav", "red_special_1")
	_G.res.createAudio(audioPath .. "/sfx/redbird_yell02.wav", "red_special_2")
	_G.res.createAudio(audioPath .. "/sfx/redbird_yell03.wav", "red_special_3")
	
	--_G.res.createAudio(audioPath .. "/sfx/redbird_yell01_low.wav", "big_brother_special_1")
	--_G.res.createAudio(audioPath .. "/sfx/redbird_yell02_low.wav", "big_brother_special_2")
	--_G.res.createAudio(audioPath .. "/sfx/redbird_yell03_low.wav", "big_brother_special_3")
	_G.res.createAudio(audioPath .. "/sfx/bigbrother_yell.wav", "big_brother_special_1")
	
	
	--_G.res.createAudio(audioPath .. "/sfx/mightymouse.wav", "bait_mouse_fly")
	--_G.res.createAudio(audioPath .. "/sfx/mightymouse_select.wav", "bait_mouse_select")
	_G.res.createAudio(audioPath .. "/sfx/sardine_can_physics_a2.mp3", "sardine_can_physics_a2")
	_G.res.createAudio(audioPath .. "/sfx/sardine_can_shot.mp3", "sardine_can_shot")
	_G.res.createAudio(audioPath .. "/sfx/mighty_eagle_fly.mp3", "mighty_eagle_fly")
	_G.res.createAudio(audioPath .. "/sfx/mightyeagle.wav", "mighty_eagle_yell")
	_G.res.createAudio(audioPath .. "/sfx/mighty_eagle_bounce.mp3", "mighty_eagle_thump")
		
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a1.wav", "piglette_a1")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a2.wav", "piglette_a2")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a3.wav", "piglette_a3")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a4.wav", "piglette_a4")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a5.wav", "piglette_a5")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette oink a6.wav", "piglette_a6")
	-- _G.res.createAudio(audioPath .. "/sfx/piglette oink a7.wav", "piglette_a7")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a8.wav", "piglette_a8")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a9.wav", "piglette_a9")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a10.wav", "piglette_a10")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a11.wav", "piglette_a11")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink a12.wav", "piglette_a12")
	_G.res.createAudio(audioPath .. "/sfx/star_collect.wav", "star_collect")
	_G.res.createAudio(audioPath .. "/sfx/button_radio.wav", "button_radio")
	_G.res.createAudio(audioPath .. "/sfx/goldenegg.wav", "goldenegg")
	_G.res.createAudio(audioPath .. "/sfx/piano-c.wav", "noteC")
	_G.res.createAudio(audioPath .. "/sfx/piano-cis.wav", "noteCis")
	_G.res.createAudio(audioPath .. "/sfx/piano-d.wav", "noteD")
	_G.res.createAudio(audioPath .. "/sfx/piano-dis.wav", "notedis")
	_G.res.createAudio(audioPath .. "/sfx/piano-e.wav", "noteE")
	_G.res.createAudio(audioPath .. "/sfx/piano-f.wav", "noteF")
	_G.res.createAudio(audioPath .. "/sfx/piano-fis.wav", "noteFis")
	_G.res.createAudio(audioPath .. "/sfx/piano-g.wav", "noteG")
	
	_G.res.createAudio(audioPath .. "/music/level_complete.mp3", "level_complete")
	_G.res.createAudio(audioPath .. "/music/game_complete.mp3", "game_complete")
	_G.res.createAudio(audioPath .. "/music/title_theme.mp3", "title_theme")
	_G.res.createAudio(audioPath .. "/music/ambient_white_dryforest.mp3", "ambient_theme1")
	_G.res.createAudio(audioPath .. "/music/ambient_green_jungleish.mp3", "ambient_theme2")
	_G.res.createAudio(audioPath .. "/music/ambient_red_savannah.mp3", "ambient_theme3")
	_G.res.createAudio(audioPath .. "/music/ambient_city.mp3", "ambient_theme7")
	_G.res.createAudio(audioPath .. "/music/ambient_theme12.mp3", "ambient_theme12")
	_G.res.createAudio(audioPath .. "/music/birds_outro.mp3", "birds_outro")
	_G.res.createAudio(audioPath .. "/music/birds_intro.mp3", "birds_intro")
	_G.res.createAudio(audioPath .. "/music/birds_boss.mp3", "birds_boss")
	_G.res.createAudio(audioPath .. "/music/funky_theme.mp3", "funky_theme")
	--_G.res.createAudio(audioPath .. "/music/atmosphere_halloween.mp3", "atmosphere_halloween")
	_G.res.createAudio(audioPath .. "/sfx/piglette oink story.wav", "piglette_oink_story")
	_G.res.createAudio(audioPath .. "/sfx/ball_bounce.wav", "ball_bounce")
	
	_G.res.createAudio(audioPath .. "/music/ambient_construction.mp3", "construction_theme1")
	
	-- sequencer
	_G.res.createAudio(audioPath .. "/sfx/pig_bd.wav", "pig_bd")
	_G.res.createAudio(audioPath .. "/sfx/pig_snare_1.wav", "pig_snare_1")
	_G.res.createAudio(audioPath .. "/sfx/pig_snare_2.wav", "pig_snare_2")
	_G.res.createAudio(audioPath .. "/sfx/pig_snare_3.wav", "pig_snare_3")
	_G.res.createAudio(audioPath .. "/sfx/pig_snare_4.wav", "pig_snare_4")
	_G.res.createAudio(audioPath .. "/sfx/pig_hi-hat_1.wav", "pig_hi-hat_1")
	_G.res.createAudio(audioPath .. "/sfx/pig_hi-hat_2.wav", "pig_hi-hat_2")
	
	-- accordion
	_G.res.createAudio(audioPath .. "/sfx/cminor_left.wav", "cminor_left")
	_G.res.createAudio(audioPath .. "/sfx/dismajor_left.wav", "dismajor_left")
	_G.res.createAudio(audioPath .. "/sfx/fmajor_left.wav", "fmajor_left")
	_G.res.createAudio(audioPath .. "/sfx/gminor_left.wav", "gminor_left")
	_G.res.createAudio(audioPath .. "/sfx/bmajor_left.wav", "bmajor_left")
	
	_G.res.createAudio(audioPath .. "/sfx/cminor_right.wav", "cminor_right")
	_G.res.createAudio(audioPath .. "/sfx/dismajor_right.wav", "dismajor_right")
	_G.res.createAudio(audioPath .. "/sfx/fmajor_right.wav", "fmajor_right")
	_G.res.createAudio(audioPath .. "/sfx/gminor_right.wav", "gminor_right")
	_G.res.createAudio(audioPath .. "/sfx/bmajor_right.wav", "bmajor_right")
	
	_G.res.createAudio(audioPath .. "/sfx/accordion_empty_pull.wav", "empty_accordion_left")
	_G.res.createAudio(audioPath .. "/sfx/accordion_empty_push.wav", "empty_accordion_right")
	_G.res.createAudio(audioPath .. "/sfx/accordion_break.wav", "accordion_break")

	_G.res.createAudio(audioPath .. "/sfx/pig_singing_1.wav", "pig_singing_1")
	_G.res.createAudio(audioPath .. "/sfx/pig_singing_2.wav", "pig_singing_2")
	_G.res.createAudio(audioPath .. "/sfx/pig_singing_3.wav", "pig_singing_3")
	_G.res.createAudio(audioPath .. "/sfx/pig_singing_4.wav", "pig_singing_4")
	_G.res.createAudio(audioPath .. "/sfx/pig_singing_5.wav", "pig_singing_5")
	_G.res.createAudio(audioPath .. "/sfx/pig_singing_6.wav", "pig_singing_6")
	_G.res.createAudio(audioPath .. "/sfx/pig_singing_7.wav", "pig_singing_7")
	_G.res.createAudio(audioPath .. "/sfx/pig_singing_8.wav", "pig_singing_8")
	
	_G.res.createAudio(audioPath .. "/music/ab_cave_ambient.mp3", "ambient_cave")
	_G.res.createAudio(audioPath .. "/sfx/jewel_break_01b.wav", "jewel_break_1")
	_G.res.createAudio(audioPath .. "/sfx/jewel_break_02b.wav", "jewel_break_2")
	_G.res.createAudio(audioPath .. "/sfx/jewel_break_03b.wav", "jewel_break_3")
	_G.res.createAudio(audioPath .. "/sfx/stalaktite_break_01.wav", "stalaktite_break_1")
	_G.res.createAudio(audioPath .. "/sfx/stalaktite_break_02.wav", "stalaktite_break_2")
	_G.res.createAudio(audioPath .. "/sfx/stalaktite_break_03.wav", "stalaktite_break_3")
	
    -- Bubbles
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Death_remove_1.wav", "bubbles_deflating")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Hit_1.wav", "bubbles collision a1")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Hit_2.wav", "bubbles collision a2")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Hit_3.wav", "bubbles collision a3")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Hit_4.wav", "bubbles collision a4")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_idle_01.wav", "bubbles_idle_a1")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_idle_02.wav", "bubbles_idle_a2")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_idle_03.wav", "bubbles_idle_a3")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Launch_3.wav", "bubbles_flying")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Selection_1.wav", "bubbles_select")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Special_Activation_1.wav", "bubbles_activation_1")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Special_Activation_2.wav", "bubbles_activation_2")
	_G.res.createAudio(audioPath .. "/sfx/Globe_Bird_Special_Activation_3.wav", "bubbles_activation_3")
	_G.res.createAudio(audioPath .. "/sfx/pink_activate_01.mp3", "pink_activate_01")
    _G.res.createAudio(audioPath .. "/sfx/pink_activate_02.mp3", "pink_activate_02")
    _G.res.createAudio(audioPath .. "/sfx/pink_activate_03.mp3", "pink_activate_03")
    _G.res.createAudio(audioPath .. "/sfx/pink_launch_01.mp3", "pink_launch_01")
    _G.res.createAudio(audioPath .. "/sfx/pink_launch_02.mp3", "pink_launch_02")
    _G.res.createAudio(audioPath .. "/sfx/pink_launch_03.mp3", "pink_launch_03")
    _G.res.createAudio(audioPath .. "/sfx/pink_special_01.mp3", "pink_special_01")
    _G.res.createAudio(audioPath .. "/sfx/pink_special_02.mp3", "pink_special_02")
    _G.res.createAudio(audioPath .. "/sfx/pink_special_03.mp3", "pink_special_03")
    _G.res.createAudio(audioPath .. "/sfx/pink_collision_01.mp3", "pink_collision_01")
    _G.res.createAudio(audioPath .. "/sfx/pink_collision_02.mp3", "pink_collision_02")
    _G.res.createAudio(audioPath .. "/sfx/pink_collision_03.mp3", "pink_collision_03")
    _G.res.createAudio(audioPath .. "/sfx/pink_collision_04.mp3", "pink_collision_04")
    _G.res.createAudio(audioPath .. "/sfx/pink_collision_05.mp3", "pink_collision_05")
	
	
	audioGroups = {
		--bad_shot = { "bad shot a1", "bad shot a2" },
		bird_01_collision = { "bird 01 collision a1", "bird 01 collision a2", "bird 01 collision a3", "bird 01 collision a4" },
		bird_02_collision = { "bird 02 collision a1", "bird 02 collision a2", "bird 02 collision a3", "bird 02 collision a4", "bird 02 collision a5" },
		bird_03_collision = { "bird 03 collision a1", "bird 03 collision a2", "bird 03 collision a3", "bird 03 collision a4", "bird 03 collision a5" },
		bird_04_collision = { "bird 04 collision a1", "bird 04 collision a2", "bird 04 collision a3", "bird 04 collision a4" },
		bird_05_collision = { "bird 05 collision a1", "bird 05 collision a2", "bird 05 collision a3", "bird 05 collision a4", "bird 05 collision a5" },
		big_brother_collision = { "bird 01 collision a1_low", "bird 01 collision a2_low", "bird 01 collision a3_low", "bird 01 collision a4_low" },
		bird_pink_collision = { "pink_collision_01", "pink_collision_02", "pink_collision_03" },
		bird_pink_flying = { "pink_launch_01", "pink_launch_02", "pink_launch_03" },
		bird_pink_selection = { "pink_activate_01", "pink_activate_02", "pink_activate_03" },	
		bird_pink_special = { "pink_special_01", "pink_special_02", "pink_special_03" },
		bird_next = { "bird next a1", "bird next a2", "bird next a3" },
		bird_next_military = { "bird next military a1", "bird next military a2", "bird next military a3" },
		bird_shot = { "bird shot a1", "bird shot a2", "bird shot a3"},
		good_shot = { "good shot a1", "good shot a2", "good shot a3"},
		--level_clear = { "level clear a1", "level clear a2" },
		level_clear_military = { "level clear military a1", "level clear military a2" },
		--level_failed = { "level failed a1", "level failed a2" },
		level_failed_piglets = { "level failed piglets a1", "level failed piglets a2" },
		--level_start = { "level start a1", "level start a2" },
		level_start_military = { "level start military a1", "level start military a2" },
		light_collision = { "light collision a1", "light collision a2", "light collision a3", "light collision a4", "light collision a5", "light collision a6", "light collision a7", "light collision a8" },
		light_damage = { "light damage a1", "light damage a2", "light damage a3" },
		light_destroyed = { "light destroyed a1", "light destroyed a2", "light destroyed a3" },
		piglette_collision = { "piglette collision a1", "piglette collision a2", "piglette collision a3", "piglette collision a4", "piglette collision a5", "piglette collision a6", "piglette collision a7", "piglette collision a8" },
		piglette_damage = { "piglette damage a1", "piglette damage a2", "piglette damage a3", "piglette damage a4", "piglette damage a5", "piglette damage a6", "piglette damage a7", "piglette damage a8" },
		rock_collision = { "rock collision a1", "rock collision a2", "rock collision a3", "rock collision a4", "rock collision a5" },
		rock_damage = { "rock damage a1", "rock damage a2", "rock damage a3" },
		rock_destroyed = { "rock destroyed a1", "rock destroyed a2", "rock destroyed a3" },
		wood_collision = { "wood collision a1", "wood collision a2", "wood collision a3", "wood collision a4", "wood collision a5", "wood collision a6" },
		wood_damage = { "wood damage a1", "wood damage a2", "wood damage a3" },
		wood_destroyed = { "wood destroyed a1", "wood destroyed a2", "wood destroyed a3" },
		bird_misc = { "bird_misc_a1", "bird_misc_a2", "bird_misc_a3", "bird_misc_a4", "bird_misc_a5", "bird_misc_a6", "bird_misc_a7", "bird_misc_a8", "bird_misc_a9", "bird_misc_a10", "bird_misc_a11", "bird_misc_a12" },
		--piglette_snoring = { "piglette snoring a1", "piglette snoring a2", "piglette snoring a3", "piglette snoring a4", "piglette snoring a5" },
		piglette = { "piglette_a1", "piglette_a2", "piglette_a3", "piglette_a4", "piglette_a5", "piglette_a8", "piglette_a9", "piglette_a10", "piglette_a11", "piglette_a12" },
		--, "piglette_a6", "piglette_a7"
		red_special = { "red_special_1", "red_special_2", "red_special_3" },
		--big_brother_special = { "big_brother_special_1", "big_brother_special_2", "big_brother_special_3" },
		big_brother_special = { "big_brother_special_1", },
		pig_accordion = {"pig_singing_1", "pig_singing_2", "pig_singing_3", "pig_singing_4", "pig_singing_5", "pig_singing_6", "pig_singing_7", "pig_singing_8" },
		stalaktite_break = {"stalaktite_break_1", "stalaktite_break_2", "stalaktite_break_3" },
		jewel_break = {"jewel_break_1", "jewel_break_2", "jewel_break_3" },
		pillar_break = { "pillar_break_1", "pillar_break_2" },
		bubbles_collision = { "bubbles collision a1", "bubbles collision a2", "bubbles collision a3", "bubbles collision a4" },
		bubbles_idle = { "bubbles_idle_a1", "bubbles_idle_a2", "bubbles_idle_a3" },
		bubbles_activation = { "bubbles_activation_1", "bubbles_activation_2", "bubbles_activation_3" },
	}

		musics = {  "ambient_theme1", -- 1
					"ambient_theme2", -- 2
					"ambient_theme3", -- 3
					"ambient_theme1", -- 4
					"ambient_theme3", -- 5
					"ambient_theme3", -- 6
					"ambient_theme7", -- 7
					"ambient_theme2", -- 8
					"construction_theme1", -- 9 
					"construction_theme1", -- 10
					"construction_theme1", -- 11
					"ambient_theme3", -- 12
					"ambient_theme3", -- 13
					"ambient_theme3", -- 14
					"ambient_cave", -- 15
					"ambient_cave", -- 16
					"ambient_cave", -- 17
				}

	if settings.audioEnabled == false then
		_G.res.stopAudioOutput()
		setEffectsVolume(0)
		setMusicVolume(0)
	else
		_G.res.startAudioOutput()
		setEffectsVolume(1)
		setMusicVolume(1)
	end
	
	if deviceModel == "roku" then
		settings.currentMainMenuTheme = settings.currentMainMenuTheme or "theme1"
		
		if(settings.currentMainMenuTheme ~= nil) then
			for k, v in _G.pairs(blockTable.themes) do
				if(k == settings.currentMainMenuTheme) then
					loadThemeGraphics(k)
					break
				end
			end
		end
	end
	
	assetsCreated = true
end
*/

/*
function saveLuaFileWrapper(fileName, tableName, appData)
	if isLiteVersion == true and deviceModel == "s60" then
		if tableName == "settings" then
			fileName = "settings_trial.lua"
		end
		
		if tableName == "highscores" then
			fileName = "highscores_trial.lua"
		end
	end		
	
	saveLuaFile(fileName, tableName, appData)
end

function getAudioName(name)
	if audioGroups[name] ~= nil then
		local index = _G.math.random(1, #audioGroups[name])
		return audioGroups[name][index]
	end

	return name
end
*/

/**
 * Game main function (update loop)
 *
 * This is called every frame.
 */

// Configuration
let showFps = true;     // Show the FPS counter
let showBG = false;     // Show the theme background
let showSleepingObjects = false;

let frameCount = 0;
let lastFrameTime = 0;
let fps = 0;
let zoomLevel = 0;

function fpsCounter() {
}
            
function update(currentTime) {
    // Clear the canvas for redrawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /**
     * FPS Counter, printed on the bottom of the
     * canvas
     */
    ctx.font = '48px AngryBirds';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1.1;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
     
    ctx.strokeText(fps + ' fps', canvas.width / 2, canvas.height - 5);

    if (showFps) {
        /**
         * Count the frames per second on the
         * canvas
         */
        frameCount++;
        if (currentTime - lastFrameTime >= 1000) { // Check every second
            fps = frameCount;
            frameCount = 0;
            lastFrameTime = currentTime;
        }
    }

    requestAnimationFrame(update);
}
requestAnimationFrame(update);

/*
function updateSplashes(currentTime) {
    if (splashTimer == null) {
		let splashTimer = 0;
		let current = 1;
		splashes = { 	{ sprite = "SPLASH_CLICKGAMER", time = 2, bgColor = { red = 255, green = 255, blue = 255} },
						{ sprite = "SPLASH_ROVIO", time = 2, bgColor = { red = 255, green = 255, blue = 255}},
						{ sprite = "SPLASH_ANGRY_BIRDS", time = 1, bgColor = { red = 0, green = 0, blue = 0}} }
        
		let splashes = [
            [
                sprite = "SPLASH_ROVIO",
                time = 2,
                bgColor = [
                    red = 255,
                    green = 255,
                    blue = 255
                ]
            ],
		    [
                sprite = "SPLASH_ANGRY_BIRDS",
                time = 1,
                bgColor = [
                    red = 0,
                    green = 0,
                    blue = 0
                ]
            ]
        ];
		
		//if deviceModel ~= "iphone" and deviceModel ~= "ipad" and deviceModel ~= "iphone4" then
		//	current = 2
		//end
        
        if (deviceModel == "roku") {
			current = '2b';
			setBGColor(0, 0, 0);
        }
    }

	// Update timer
	splashTimer = splashTimer + dt;

	if (keyPressed["LBUTTON"]) {
		splashTimer = splashes[current].time + 1
    }

	
	var sw, sh = null _G.res.getSpriteBounds("", splashes[current].sprite);
	var scale = false;
	var xs, ys = 1, 1;
	var xCoord, yCoord =  screenWidth / 2, screenHeight / 2;
	if (splashes[current].sprite == "SPLASH_ROVIO" && screenHeight * 0.8 < sh) {
		scale = true;
		ys = (screenHeight * 0.8) / sh;
		xs = (screenHeight * 0.8) / sh;
		local newWidth = sw * xs;
		if (newWidth > screenWidth) {
			ys = screenWidth / sw;
			xs = screenWidth / sw;
        }
    } else if (splashes[current].sprite != "SPLASH_ROVIO" && screenHeight != sh) {
		if (splashes[current].sprite != "SPLASH_CLICKGAMER" && deviceModel != "ipad") {
			scale = true;
			ys = screenHeight / sh;
			xs = screenHeight / sh;
			local newWidth = sw * xs;
			if (newWidth > screenWidth) {
				ys = screenWidth / sw;
				xs = screenWidth / sw;
            }
        }
    }
			
	if scale then
		setRenderState(0, 0, xs, ys)
		_G.res.drawSprite(splashes[current].sprite, _G.math.floor(xCoord / xs), _G.math.floor(yCoord / ys))
		if splashes[current].sprite == "SPLASH_ANGRY_BIRDS" then
			if isBetaVersion and deviceModel == "android" then
				_G.res.drawSprite("LITE_SPLASH", _G.math.floor(xCoord) / xs, _G.math.floor(yCoord) / ys)
			end
			--setRenderState(0, 0, 1, 1)
			if isBetaVersion and deviceModel == "android" then
				_G.res.drawSprite("SPLASH_LOADING", screenWidth, screenHeight)
			else
				if deviceModel == "roku" then
					local sw, sh = _G.res.getSpriteBounds("LOADING_EN")
					local xC, yC = screenWidth - sw * 0.5, screenHeight - sh
					local loadingScale = 1.8
					if screenHeight <= 576 then
						loadingScale = 1.2
					end
					setRenderState(0, 0, loadingScale, loadingScale)
					_G.res.drawSprite("LOADING_EN", _G.math.floor(xC / loadingScale), _G.math.floor(yC / loadingScale))
					setRenderState(0, 0, xs, ys)
				else
					_G.res.drawSprite(_G.res.getString("TEXTS_BASIC", "TEXT_SPLASH_LOADING_SPRITE"), screenWidth / xs, screenHeight / ys)
				end
			end
		end
		setRenderState(0, 0, 1, 1)
	else
		_G.res.drawSprite(splashes[current].sprite, screenWidth/2, screenHeight/2)
		-- loading text in different languages
		if splashes[current].sprite == "SPLASH_ANGRY_BIRDS" then
			_G.res.drawSprite(_G.res.getString("TEXTS_BASIC", "TEXT_SPLASH_LOADING_SPRITE"), screenWidth, screenHeight)
			if isBetaVersion and deviceModel == "android" then
				_G.res.drawSprite("LITE_SPLASH", screenWidth / 2, screenHeight / 2)
				_G.res.drawSprite("SPLASH_LOADING", screenWidth, screenHeight)
			end
		end
	end
	

	if current >= 2 and splashTimer > dt and assetsCreated ~= true then
		createAssets()
	end
	
	-- Change sprite if showed long enough
	if splashTimer > splashes[current].time then
		splashTimer = 0
		current = current + 1
		if splashes[current] ~= nil then
			setBGColor(splashes[current].bgColor.red, splashes[current].bgColor.green, splashes[current].bgColor.blue)
		end
		if current > #splashes then
			initialize()
					
			
			local t_minimumScreenWidth = 1024
			--local t_minimumScreenHeight = 768
			--local t_minimumScreenHeight = 720
			local t_minimumScreenHeight = 600
			
			if screenWidth < t_minimumScreenWidth or screenHeight < t_minimumScreenHeight then
				g_invalidResolutionTriggeredOnStart = true											
			end
			
			setGameMode(updateMenu)
		end
	end
}
*/
