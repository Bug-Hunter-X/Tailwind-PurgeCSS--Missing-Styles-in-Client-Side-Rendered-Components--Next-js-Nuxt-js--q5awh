The solution involves explicitly specifying the dynamically generated classes to PurgeCSS,  or using a different strategy to include them. One approach is to use the `safelist` option in your Tailwind configuration. Add the dynamic class pattern(s) to this option. For example, if your dynamic classes follow the pattern `dynamic-class-*`, you can add this to your `tailwind.config.js`:

```javascript
module.exports = {
  // ... other configuration
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    safelist: ['dynamic-class-*'], // Add this line
  },
  // ... rest of the configuration
}
```
Another solution would be to use a different strategy to include these classes. You could manually add the classes to your CSS, or use a different method of generating dynamic classes that's more compatible with PurgeCSS.