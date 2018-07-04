import React from 'react'
import Link from 'gatsby-link'

import styles from '../styles/background.module.sass'

function onReady() {
  scaleVideoContainer()

  initBannerVideoSize('.video-container .poster img')
  initBannerVideoSize('.video-container .filter')
  initBannerVideoSize('.video-container video')

  $(window).on('resize', function() {
    scaleVideoContainer()
    scaleBannerVideoSize('.video-container .poster img')
    scaleBannerVideoSize('.video-container .filter')
    scaleBannerVideoSize('.video-container video')
  })
}

function scaleVideoContainer() {
  const height = $(window).height() + 5
  const unitHeight = parseInt(height) + 'px'

  $('.homepage-hero-module').css('height', unitHeight)
}

function initBannerVideoSize(element) {
  $(element).each(function() {
    $(this).data('height', $(this).height())
    $(this).data('width', $(this).width())
  })

  scaleBannerVideoSize(element)
}

function scaleBannerVideoSize(element) {
  const windowWidth = $(window).width()
  const windowHeight = $(window).height() + 5

  $(element).each(function() {
    const videoAspectRatio = $(this).data('height') / $(this).data('width')

    $(this).width(windowWidth)

    if (windowWidth < 1000) {
      const videoHeight = windowHeight
      const videoWidth = videoHeight / videoAspectRatio
      $(this).css({
        'margin-top': 0,
        'margin-left': -(videoWidth - windowWidth) / 2 + 'px',
      })

      $(this)
        .width(videoWidth)
        .height(videoHeight)
    }

    $('.homepage-hero-module .video-container video').addClass(
      'fadeIn animated'
    )
  })
}

const Logo = () => (
  <div className="backgroundContainer">
    <div className="videoContainer">
      <div className="filter" />
      <video autoplay loop className="fillWidth">
        <source src="../../resources/mp4/coding.mp4" type="video/mp4" />Your
        browser does not support the video tag. I suggest you upgrade your
        browser.
        <source src="../../resources/webm/coding.webm" type="video/webm" />Your
        browser does not support the video tag. I suggest you upgrade your
        browser.
      </video>
      <div className="poster hidden">
        <img src="../../resources/snapshots/coding.jpg" alt="" />
      </div>
    </div>
  </div>
)

export default Logo
