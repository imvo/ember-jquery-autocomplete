(function () {
    'use strict';
    Ember.AutocompleteComponent = Ember.TextField.extend({
        bindAttr: ['auto-focus'],
        didInsertElement: function () {
            this._super();
            var self = this;

            //makes property act like a promise independent of its promise o non-promise nature
            function makePromise(tgt) {
                return new Ember.RSVP.Promise(function (resolve) {
                    resolve(tgt);
                });
            }

            if (!this.get('vocabulary')) {
                throw 'No vocabulary available for autocomplete';
            }

            makePromise(this.get('vocabulary')).then(function (voc) {
                self.initAutocomplete(voc);
            });
        },

        initAutocomplete: function (data) {
            var self = this;
            if (this.get('auto-focus')) {
                this.$().focus();
            }

            this.autocomplete = this.$().autocomplete({
                lookup: data,
                onSelect: function (suggestion) {
                    if (self.get('value')) {
                        self.set('value', suggestion.value);
                    }
                }
            });
        }
    });
    Ember.Handlebars.helper('-autocomplete', Ember.AutocompleteComponent);
}());
