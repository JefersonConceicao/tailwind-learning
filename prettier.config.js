async function loadTailwindPlugin() {
  const tailwindPlugin = await import('prettier-plugin-tailwindcss');
  return {
    plugins: [tailwindPlugin.default],
  };
}

module.exports = loadTailwindPlugin();