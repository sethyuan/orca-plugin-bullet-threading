let pluginName: string

export async function load(_name: string) {
  pluginName = _name

  orca.themes.injectCSSResource(`${pluginName}/dist/main.css`, pluginName)

  console.log(`${pluginName} loaded.`)
}

export async function unload() {
  // Clean up any resources used by the plugin here.
  orca.themes.removeCSSResources(pluginName)

  console.log(`${pluginName} unloaded.`)
}
