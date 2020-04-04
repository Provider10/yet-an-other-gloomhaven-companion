var modifiersManagement = {
    data: {
        /* Modifier information */
        modifiers : [],
        modifiersBase : [],
        modifiersSpecial : [],        
        modifierCategory: null,        
        modifiersChosen: [],
        modifiersDrawPile: [],
        specialModifiers : false,
        lastDrawnModifier: null,
        modifiersDiscardPile : [],
        overlayCard: {}        
    },
    methods: {
        displayModifiers: function(param) {
            this.className = param
            if (this.modifierCategory == param) {
                this.modifierCategory = null
            } else {
                this.modifierCategory = param
            }
        },       
        addModifier: function(card) {   
            if (!this.modifiersChosen.includes(card)) {
                this.modifiersChosen.push(card)
                this.modifiersDrawPile.push(card)
            } else {
                this.removeModifier(card)
            }            
        },
        removeModifier: function(card) {
            indexOfCardToRemove = this.modifiersChosen.indexOf(card)
            this.modifiersChosen.splice(indexOfCardToRemove, 1)
            this.modifiersDrawPile.splice(indexOfCardToRemove, 1)
        },
        drawModifier: function() {
            var randomint = getRandomInt(this.modifiersDrawPile.length)
            if(this.lastDrawnModifier != null ){
                this.modifiersDiscardPile.unshift(this.lastDrawnModifier)
            }
            this.lastDrawnModifier = this.modifiersDrawPile[randomint]
            this.modifiersDrawPile.splice(randomint,1)
        },
        shuffleModifiersDeck: function() {
            this.modifiersDrawPile = this.modifiersChosen.slice()
            this.lastDrawnModifier = null
            this.modifiersDiscardPile = []
        },
        displaySpecialModifiers: function() {
            if(this.specialModifiers){
                this.specialModifiers = false
            }else{
                this.specialModifiers = true
            }
        }, 
        switchModifierClass: function () {
            this.modifierCategory = null
            this.className = ''
            this.modifiersChosen = this.modifiersBase.slice()
        }
    }
}