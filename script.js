// Card Module - Modern ES6 Module Structure
const CardModule = {
    // Initialize the module
    init() {
        this.loadCards();
    },

    // Function to load cards from JSON
    async loadCards() {
        try {
            const response = await fetch('data.json');
            const data = await response.json();
            this.renderCards(data.cards);
        } catch (error) {
            console.error('Error loading cards:', error);
            // Fallback: create sample cards if JSON fails to load
            this.createSampleCards();
        }
    },

    // Function to render cards
    renderCards(cards) {
        const container = document.getElementById('cards-container');
        container.innerHTML = '';

        cards.forEach(card => {
            const cardElement = this.createCardElement(card);
            container.appendChild(cardElement);
        });
    },

    // Function to create individual card element with Tailwind classes
    createCardElement(card) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'apple-card group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl';
        
        cardDiv.innerHTML = `
            <div class="relative overflow-hidden rounded-t-xl">
                <img src="${card.imageUrl}" alt="${card.title}" 
                     class="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                     onError="this.src='https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop'">
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div class="absolute top-4 right-4 apple-glass rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                    </svg>
                </div>
            </div>
            
            <div class="p-6">
                <!-- Title and Category -->
                <div class="flex items-center justify-between mb-3">
                    <h1 class="text-2xl font-bold text-gray-900 tracking-tight leading-tight">${card.title}</h1>
                    <span class="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">${card.subtitle.split(' ')[0]}</span>
                </div>
                
                <h2 class="text-lg font-semibold text-blue-600 mb-3 leading-snug">${card.subtitle}</h2>
                <p class="text-gray-600 mb-6 leading-relaxed font-normal">${card.description}</p>
                
                <!-- Price -->
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center space-x-2">
                        <span class="text-2xl font-bold text-gray-900 tracking-tight">${card.button1Text.split(' ').pop()}</span>
                        <span class="text-sm text-gray-500 font-normal">starting at</span>
                    </div>
                    <div class="flex items-center space-x-1">
                        ${[...Array(5)].map((_, i) => `
                            <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        `).join('')}
                        <span class="text-sm text-gray-500 ml-1 font-normal">4.8</span>
                    </div>
                </div>
                
                <!-- Two Required Buttons with 1px Drop Effect -->
                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="flex-1 bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold text-base transition-all duration-200 hover:bg-blue-700 active:translate-y-1 transform hover:shadow-lg flex items-center justify-center space-x-2">
                        <span>Buy Now</span>
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </button>
                    <button class="flex-1 border-2 border-blue-600 text-blue-600 bg-white rounded-xl px-6 py-3 font-semibold text-base transition-all duration-200 hover:bg-blue-50 active:translate-y-1 transform hover:shadow-lg flex items-center justify-center space-x-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span>Learn More</span>
                    </button>
                </div>
            </div>
        `;
        
        return cardDiv;
    },

    
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    CardModule.init();
});
