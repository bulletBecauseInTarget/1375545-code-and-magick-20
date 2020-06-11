'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_Y + TEXT_WIDTH * 2, CLOUD_HEIGHT - CLOUD_X - BAR_HEIGHT + GAP + FONT_GAP);
  ctx.fillText('Список Результатов:', CLOUD_Y + TEXT_WIDTH * 2, CLOUD_HEIGHT - CLOUD_X - BAR_HEIGHT + GAP + FONT_GAP + FONT_GAP);

};


var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + ((GAP * 2 + BAR_WIDTH + FONT_GAP) * i), CLOUD_HEIGHT - CLOUD_X - BAR_HEIGHT + GAP + FONT_GAP * 3)
    ctx.fillText(players[i], CLOUD_X + GAP + (GAP * 2 + FONT_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    if (players[i] !== 'Вы') {
      ctx.fillStyle = 'hsl(240, 40%, 30%)';
      ctx.fillRect(CLOUD_X + GAP + ((GAP * 4 + BAR_WIDTH) * i), CLOUD_HEIGHT - GAP * 2, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP + ((GAP * 4 + BAR_WIDTH) * i), CLOUD_HEIGHT - GAP * 2, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};
