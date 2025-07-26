g_useNewIap = false;
adRemovalItemId = "com.rovio.angrybirds.removeads";
mightyEagleItemId = "com.clickgamer.angrybirds.mightyeagle2";
if (deviceModel == "ipad") {
mightyEagleItemId = "com.chillingo.angrybirdsipad.mightyeagle";
}
let g_iap_purchase_limit = 40;
let g_iap_limit_days = 1;
let g_iap_history_keep_days = 10;
//if deviceModel == "iphone" or deviceModel == "ipad" then
//end
// g_magic_places_enabled = deviceModel == "iphone" or deviceModel == "ipad"
//g_kingpig_mode_enabled = deviceModel ~= "osx"
g_rovio_account_enabled = false;
if (g_kingpig_mode_enabled == true) {
// TODO: load mattel.lua
//_G.table.insert(g_extra_subsystems, Mattel)
}
if (g_magic_places_enabled == true) {
// TODO: load subsystems/MagicPlaces.lua
//_G.table.insert(g_extra_subsystems, MagicPlaces)
}
/*if (deviceModel == "ipad" and screenWidth == 2048) {
  g_cutscene_asset_scale = 2;
}*/
g_mighty_eagle_buttons_on_main_menu = false;
g_powerupshop_on_main_menu = true;
//g_daily_reward_notifications = g_powerups_enabled and true;
g_daily_reward_notification_time = 86400;
g_inactivity_notification = true;
g_inactivity_notification_time = 604800;
if (releaseBuild == true) {
  g_use_download_tracking = true;
  switch (deviceModel) {
  case "iphone":
    g_bundle_id = "com.clickgamer.angrybirds";
    break;
  case "ipad":
    g_bundle_id = "com.chillingo.angrybirdsipad";
    break;
  case "android":
    g_bundle_id = "com.rovio.angrybirds";
    }
}