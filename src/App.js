import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyCreator from "./SurveyCreator";
import SurveyCharts from "./SurveyCharts";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {
  
  
   json = {
          "completedHtml": "<h3>Thank you for your feedback.</h3> <h5>Your thoughts and ideas will help us to create a great Company!</h5>",
          "completedHtmlOnCondition": [
              {
                  "expression": "{nps_score} > 8",
                  "html": "<h3>Thank you for your feedback.</h3> <h5>We glad that you love our Company. Your ideas and suggestions will help us to make our Team even better!</h5>"
              }, {
                  "expression": "{nps_score} < 7",
                  "html": "<h3>Thank you for your feedback.</h3> <h5> We are glad that you share with us your ideas.We highly value all suggestions. We do our best to improve our team and Company</h5>\n"
              }
          ],
          "pages": [
              {
                  "name": "managersQuestion",
                  "elements": [
                      {
                          "type": "rating",
                          "name": "nps_score",
                          "title": "On a scale of zero to ten, do you regularly receive constructive performance feedback from your manager?",
                          "isRequired": true,
                          "rateMin": 0,
                          "rateMax": 10,
                          "minRateDescription": "(Most unlikely)",
                          "maxRateDescription": "(Most likely)"
                      },
                      {
                        "type": "rating",
                        "name": "manage2_score",
                        "title": "On a scale of zero to ten, do you understand how your performance is measured?",
                        "isRequired": true,
                        "rateMin": 0,
                        "rateMax": 10,
                        "minRateDescription": "(Most unlikely)",
                        "maxRateDescription": "(Most likely)"
                    },{
                      "type": "rating",
                      "name": "manage3_score",
                      "title": "On a scale of zero to ten, does your manager treat everyone on the team fairly?",
                      "isRequired": true,
                      "rateMin": 0,
                      "rateMax": 10,
                      "minRateDescription": "(Most unlikely)",
                      "maxRateDescription": "(Most likely)"
                  },{
                    "type": "rating",
                    "name": "manage4_score",
                    "title": "On a scale of zero to ten, do you and your manager discuss your career within this organization? ",
                    "isRequired": true,
                    "rateMin": 0,
                    "rateMax": 10,
                    "minRateDescription": "(Most unlikely)",
                    "maxRateDescription": "(Most likely)"
                },{
                  "type": "rating",
                  "name": "manage5_score",
                  "title": "On a scale of zero to ten, does your manager recognize the importance of your personal and family life?",
                  "isRequired": true,
                  "rateMin": 0,
                  "rateMax": 10,
                  "minRateDescription": "(Most unlikely)",
                  "maxRateDescription": "(Most likely)"
              }
                  ]
              }
          ],
          
          
          "showQuestionNumbers": "on"
      };
  
 

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    Survey
    .StylesManager
    .applyTheme("default");
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <h2>TCS Digital Survey Tool</h2>
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
        </div>
        <p className="App-intro">
        Please conatact Digital  Team for detail. This survey is created by Sandli. 
        </p>
      </div>
    );
  }
}

export default App;