game.add.plugin(PhaserAds.AdManager);
window.onload = function(){
    var game=new Phaser.Game();
}
var provider = new PhaserAds.AdProvider.GameDistributionAds(
    game,                                        // Your Phaser game instance
    '2d77cfd4b1e5487d998465c29de195b3'           // Your gameId
    );
    game.ads.setAdProvider(provider);

 game.ads.showAd();