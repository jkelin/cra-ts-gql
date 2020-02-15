FROM fireantik/spa-prod:v0.6

# Copy configuration
COPY ./spa-prod.config.js /app/spa-prod.config.js
ENV SPA_PROD_CONFIG /app/spa-prod.config.js

# Copy built files from dist directory
COPY ./build /app/build
