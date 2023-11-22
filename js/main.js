'use strict';
(() => {
  class GlobeDrawer {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.r = 80;
    }

    draw(angle) {

      //  this.ctx.fillRect(0, 0, this.width, this.height); 
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.save();

      this.ctx.translate(this.width / 2, this.height / 2);

      this.ctx.beginPath();
      this.ctx.moveTo(0, -this.r);

      this.ctx.arc(0, 0, this.r, -Math.PI / 2, Math.PI / 2 * 3);

      this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * 60), this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);

      this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * 30), this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);

      this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * 0), this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);

      this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * -30) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * -30), this.r * Math.cos(Math.PI / 180 * -30) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);

      this.ctx.ellipse(0, -this.r * Math.sin(Math.PI / 180 * -60) * Math.cos(Math.PI / 180 * 23.4), this.r * Math.cos(Math.PI / 180 * -60), this.r * Math.cos(Math.PI / 180 * -60) * Math.sin(Math.PI / 180 * 23.4), 0, -Math.PI / 2, Math.PI / 2 * 3);

      this.ctx.ellipse(0, 0, this.r * Math.abs(Math.cos(Math.PI / 180 * (angle + 90))), this.r, 0, -Math.PI / 2, Math.PI / 2 * 3);


      //  this.ctx.fillStyle = 'hsls(180, 50%, 50%, 0.3)';
      // 日本
      this.ctx.moveTo(-this.r * Math.cos(Math.PI / 180 * 45) * Math.sin(Math.PI / 180 * (angle + 145)), -this.r * Math.sin(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * (angle + 145)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle + 140)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle + 140)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle + 130)), -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * (angle + 130)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(-this.r * Math.cos(Math.PI / 180 * 45) * Math.sin(Math.PI / 180 * (angle + 145)), -this.r * Math.sin(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * 23.4) - this.r * Math.cos(Math.PI / 180 * 45) * Math.cos(Math.PI / 180 * (angle + 145)) * Math.sin(Math.PI / 180 * 23.4));

      // 南北アメリカ
      this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 170 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle - 170 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 90 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle - 90 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle - 55 + 180)), -this.r * Math.sin(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * (angle - 55 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle - 90 + 180)), -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * (angle - 90 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle - 80 + 180)), -this.r * Math.sin(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * (angle - 80 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle - 50 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle - 50 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -5) * Math.sin(Math.PI / 180 * (angle - 35 + 180)), -this.r * Math.sin(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * (angle - 35 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -55) * Math.sin(Math.PI / 180 * (angle - 70 + 180)), -this.r * Math.sin(Math.PI / 180 * -55) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -55) * Math.cos(Math.PI / 180 * (angle - 70 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle - 80 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle - 80 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 10) * Math.sin(Math.PI / 180 * (angle - 80 + 180)), -this.r * Math.sin(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 10) * Math.cos(Math.PI / 180 * (angle - 80 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 120 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle - 120 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle - 170 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle - 170 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      // ユーラシア・アフリカ
      this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 180 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle + 180 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 105 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle + 105 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 20) * Math.sin(Math.PI / 180 * (angle + 90 + 180)), -this.r * Math.sin(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * (angle + 90 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 5) * Math.sin(Math.PI / 180 * (angle + 75 + 180)), -this.r * Math.sin(Math.PI / 180 * 5) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 5) * Math.cos(Math.PI / 180 * (angle + 75 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 25) * Math.sin(Math.PI / 180 * (angle + 60 + 180)), -this.r * Math.sin(Math.PI / 180 * 25) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 25) * Math.cos(Math.PI / 180 * (angle + 60 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 40 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle + 40 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -45) * Math.sin(Math.PI / 180 * (angle + 20 + 180)), -this.r * Math.sin(Math.PI / 180 * -45) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -45) * Math.cos(Math.PI / 180 * (angle + 20 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -5) * Math.sin(Math.PI / 180 * (angle + 10 + 180)), -this.r * Math.sin(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -5) * Math.cos(Math.PI / 180 * (angle + 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 0) * Math.sin(Math.PI / 180 * (angle + 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 0) * Math.cos(Math.PI / 180 * (angle + 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 20) * Math.sin(Math.PI / 180 * (angle - 20 + 180)), -this.r * Math.sin(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 20) * Math.cos(Math.PI / 180 * (angle - 20 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle - 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 30) * Math.sin(Math.PI / 180 * (angle + 30 + 180)), -this.r * Math.sin(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 30) * Math.cos(Math.PI / 180 * (angle + 30 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle + 35 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle + 35 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 35) * Math.sin(Math.PI / 180 * (angle - 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 35) * Math.cos(Math.PI / 180 * (angle - 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 55) * Math.sin(Math.PI / 180 * (angle + 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 55) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 55) * Math.cos(Math.PI / 180 * (angle + 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle + 5 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle + 5 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 25 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle + 25 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 75) * Math.sin(Math.PI / 180 * (angle + 100 + 180)), -this.r * Math.sin(Math.PI / 180 * 75) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 75) * Math.cos(Math.PI / 180 * (angle + 100 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 70) * Math.sin(Math.PI / 180 * (angle + 180 + 180)), -this.r * Math.sin(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 70) * Math.cos(Math.PI / 180 * (angle + 180 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      // 英国
      this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 5 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle - 5 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle + 180)), -this.r * Math.sin(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * (angle + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 50) * Math.sin(Math.PI / 180 * (angle - 10 + 180)), -this.r * Math.sin(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 50) * Math.cos(Math.PI / 180 * (angle - 10 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * 60) * Math.sin(Math.PI / 180 * (angle - 5 + 180)), -this.r * Math.sin(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * 60) * Math.cos(Math.PI / 180 * (angle - 5 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      // オーストラリア
      this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * -10) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -25) * Math.sin(Math.PI / 180 * (angle + 150 + 180)), -this.r * Math.sin(Math.PI / 180 * -25) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -25) * Math.cos(Math.PI / 180 * (angle + 150 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -40) * Math.sin(Math.PI / 180 * (angle + 145 + 180)), -this.r * Math.sin(Math.PI / 180 * -40) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -40) * Math.cos(Math.PI / 180 * (angle + 145 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -35) * Math.sin(Math.PI / 180 * (angle + 115 + 180)), -this.r * Math.sin(Math.PI / 180 * -35) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -35) * Math.cos(Math.PI / 180 * (angle + 115 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -20) * Math.sin(Math.PI / 180 * (angle + 115 + 180)), -this.r * Math.sin(Math.PI / 180 * -20) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -20) * Math.cos(Math.PI / 180 * (angle + 115 + 180)) * Math.sin(Math.PI / 180 * 23.4));
      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -10) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -10) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      // 南極
      this.ctx.moveTo(this.r * Math.cos(Math.PI / 180 * -80) * Math.sin(Math.PI / 180 * (angle - 40 + 180)), -this.r * Math.sin(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * (angle - 40 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -60) * Math.sin(Math.PI / 180 * (angle - 60 + 180)), -this.r * Math.sin(Math.PI / 180 * -60) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -60) * Math.cos(Math.PI / 180 * (angle - 60 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -75) * Math.sin(Math.PI / 180 * (angle - 160 + 180)), -this.r * Math.sin(Math.PI / 180 * -75) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -75) * Math.cos(Math.PI / 180 * (angle - 160 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -65) * Math.sin(Math.PI / 180 * (angle + 140 + 180)), -this.r * Math.sin(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * (angle + 140 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -65) * Math.sin(Math.PI / 180 * (angle + 100 + 180)), -this.r * Math.sin(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * (angle + 100 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -65) * Math.sin(Math.PI / 180 * (angle + 60 + 180)), -this.r * Math.sin(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -65) * Math.cos(Math.PI / 180 * (angle + 60 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -70) * Math.sin(Math.PI / 180 * (angle + 0 + 180)), -this.r * Math.sin(Math.PI / 180 * -70) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -70) * Math.cos(Math.PI / 180 * (angle + 0 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      this.ctx.lineTo(this.r * Math.cos(Math.PI / 180 * -80) * Math.sin(Math.PI / 180 * (angle - 40 + 180)), -this.r * Math.sin(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * 23.4) + this.r * Math.cos(Math.PI / 180 * -80) * Math.cos(Math.PI / 180 * (angle - 40 + 180)) * Math.sin(Math.PI / 180 * 23.4));

      //  this.ctx.fill();
      this.ctx.stroke();
      this.ctx.restore();

    }
  }

  class Globe {
    constructor(drawer) {
      this.drawer = drawer;
      this.angle = 0;
    }

    draw() {
      this.drawer.draw(this.angle);
    }

    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update() {
      this.angle += 1;
    }

    run() {
      this.update();
      this.draw();

      setTimeout(() => {
        this.run();
      }, 100);

    }
  }

  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const globe = new Globe(new GlobeDrawer(canvas));
  globe.run();
})();



