report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_test_BackstopJS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20190406-171733/backstop_test_BackstopJS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_test_BackstopJS_Homepage_0_document_0_phone.png",
        "label": "BackstopJS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "https://map.qq.com/m/index/index",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "4.32",
          "analysisTime": 53
        },
        "diffImage": "../bitmaps_test/20190406-171733/failed_diff_backstop_test_BackstopJS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_test"
});