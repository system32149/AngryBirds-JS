let iapInitTimeOut = 20;
let g_useNewIap = false;
let adRemovalItemId = "com.rovio.angrybirds.removeads";
let mightyEagleItemId = "com.clickgamer.angrybirds.mightyeagle2";
if (deviceModel == "ipad") {
  mightyEagleItemId = "com.chillingo.angrybirdsipad.mightyeagle";
}
//g_isAccelerometerControl = deviceModel == "freebox":
let g_restDistance = 2;
if (deviceModel == "freebox") {
  let g_restDistance = 2;
}
//g_disableDragPanning = g_isAccelerometerControl;
//g_deltaBasedSlingshot = g_isAccelerometerControl;
//g_slingshotSensitivity = 0.1;
//g_enableHoverScaling = deviceModel == "windows" or deviceModel == "osx" or deviceModel == "freebox"
//g_skipToAngryBirdsSplash = deviceModel == "bada" or deviceModel == "blackberry"
//g_layoutMargin = {x = 0, y = 0}
if (deviceModel == "freebox") {
  let g_rokuCursorVisible = true;
}
let tapRadius = 15 * screenWidth / 480;
let g_cutsceneFilm = false;
/*
if (deviceModel == "windows") or (deviceModel == "osx") or (deviceModel == "freebox") {
  g_cutsceneFilm = true;
}
*/
//g_cutsceneDimensions = {width = 1024, height = 657}
let g_cutscene_asset_scale = 1;
//g_hud_class_name = {"ui", "GameHud"}
//g_level_complete_class_name = {
//  "LevelComplete"
//}
let g_mighty_eagle_buttons_on_main_menu = false;
let g_powerupshop_on_main_menu = false;
let eagleLockedTime = 3600;
if (cheatsEnabled == true) {
  eagleLockedTime = 60;
}
let waterMaxBuoyancyDepth = 5;
//bubbleFrequency = {4, 7}
let pigDefenceBoost = 50;
let bubbleAntiGravity = 1.8;
let bubbleAntiGravityTime = 2;
//bubbleAntiGravityFloat = {-3, 3}
let antiGravityMaxVelocity = 10;
let g_streamSounds = false;
let g_disableAnimatedTutorials = false;
//g_powerups_enabled = deviceModel == "iphone" or deviceModel == "ipad" or deviceModel == "android"
let g_rovio_account_enabled = false;
/*g_allowLowQualityGraphics = deviceModel == "android" and not isHDVersion
g_extra_subsystems = {}
g_splashes = {
  "RovioSplash",
  "AngryBirdsSplash"
}*/
let hideHud = false;
let showCameraDebugData = false;
function eagleScoreElementsEnabled() {
  return true;
}
function eagleUIElementsEnabled() {
  return true;
}
let g_use_download_tracking = false;
let g_bundle_id = "";
