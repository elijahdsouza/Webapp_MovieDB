define(
    [
        'jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone) {

        var bluRayView = Backbone.View.extend({
            className: 'bluray-item',

            template: _.template('<div class="col-sm-6 col-md-4">\
                                    <div class="thumbnail well">\
                                      <img class="item-preview" src="<%= Url %>" alt="<%= Title %>">\
                                      <div class="caption">\
                                        <h3><%= Title %></h3>\
                                        <a href="#" id="<%= Id %>" class="btn btn-primary right" role="button">Buy</a>\
                                      </div>\
                                    </div>\
                                  </div>'),

            events: {
                'click a.btn.btn-primary.right': function(event) { 
                    var id = event.currentTarget.id;
                    window.location = "http://redsox.tcs.auckland.ac.nz/BC/Closed/Service.svc/brbuy?id=" + id + "";
                }
            },
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return bluRayView;
    });