# ATLAS Automation Exporter / Editor Plugin

ATLAS Automation Exporter / Editor is an ATLAS plugin for analyzing and
exporting Home Assistant automations. It is inspired by the portable Windows
Home Assistant Automation Exporter and moves the workflow into the ATLAS plugin
architecture.

## Plugin

<img src="plugins/automation-exporter-editor/icon.svg" alt="ATLAS Automation Exporter / Editor icon" width="96" height="96">

<p>
  <strong>ATLAS Automation Exporter / Editor</strong><br>
  Plugin ID: <code>atlas.plugin.automation-exporter-editor</code><br>
  Version: <code>0.1.2</code>
</p>

## Install in ATLAS

Use the install page:

`https://rockbaer2007.github.io/atlas-automation-exporter-editor-plugin/install.html`

Or add the GitHub repository directly in ATLAS Administration:

`https://github.com/rockbaer2007/atlas-automation-exporter-editor-plugin`

ATLAS also accepts the raw repository JSON directly:

`https://raw.githubusercontent.com/rockbaer2007/atlas-automation-exporter-editor-plugin/main/repository.json`

## First Scope

- read `/config/automations.yaml` through the approved File Studio path
- upload external YAML files for local analysis
- list detected automations with alias, id, entities and services
- show analysis hints for missing or duplicate ids/aliases, missing triggers or
  actions and disabled automations
- filter to automations with hints only
- configure a target export folder label
- export selected automations as individual YAML files
- use filenames like `name_dd_mm_yy-hh_mm_ss.yaml`
- keep an overview of exported automations in the current session
- open File Studio for further editing

The first version is intentionally conservative and does not write back into
Home Assistant automatically.
