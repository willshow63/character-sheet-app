/* eslint-disable no-case-declarations */
import Character5e from '../models/Character5e.js';
import Weapon from '../models/Weapon.js';
import SheetView from './SheetView.js';

const template = document.createElement('template');
template.innerHTML = `
<style>
    .spell-entry { margin-bottom: 1em; }
    .spell-entry field-editable { display: inline-block; }
    .spell-name { font-weight: bold; }
    .spell-row { display: flex; gap: 0.5em; flex-wrap: wrap; margin-bottom: 0.25em; }
    .spell-row field-editable { flex: 1; min-width: 60px; }
    .spell-section { border-top: 3px solid #990000; padding-top: 1em; margin-top: 1em; }
    .spell-section:first-child { border-top: none; margin-top: 0; }
    .spelllist-header { display: flex; gap: 2em; margin-bottom: 1em; flex-wrap: wrap; }
    .spelllist-header div { display: flex; align-items: center; gap: 0.5em; }
</style>
<ul id="toptabs" role="tablist">
    <li role="presentation"><a role="tab" id="tab-stats" href="#pane-stats" aria-selected="true">Statistics, Abilities, Equipment, etc.</a></li>
    <li role="presentation"><a role="tab" id="tab-notes" href="#pane-notes" aria-selected="false">Notes, Personality, NPCs, etc.</a></li>
    <li role="presentation"><a role="tab" id="tab-spelllist" href="#pane-spelllist" aria-selected="false">Spell List</a></li>
    <li role="presentation"><a role="tab" id="tab-backstory" href="#pane-backstory" aria-selected="false">Backstory</a></li>
</ul>

<section id="pane-stats" class="grid" role="tabpanel" aria-labelledby="tab-stats">
    <section class="fullwidth">
        <dl class="field">
            <div>
                <dt>Class</dt><dd><field-editable data-name="charclass"></field-editable></dd>
            </div>
            <div>
                <dt>Race</dt><dd><field-editable data-name="race"></field-editable></dd>
            </div>
            <div>
                <dt>Background</dt><dd><field-editable data-name="background"></field-editable></dd>
            </div>
            <div>
                <dt>Alignment</dt><dd><field-editable data-name="alignment"></field-editable></dd>
            </div>
            <div>
                <dt>Level</dt><dd><field-editable data-name="level" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Experience</dt><dd><field-editable data-name="experience" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Proficiency Bonus</dt><dd class="small" data-name="proficiency"></dd>
            </div>
            <div>
                <dt>Inspiration</dt><dd><field-editable data-name="inspiration" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Speed</dt><dd><field-editable data-name="speed" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>Hit Dice</dt>
                <dd>
                    <field-editable class="smallinline" data-name="hd_cur" placeholder="0" aria-label="Current Hit Dice"></field-editable> <strong>/</strong> <field-editable class="smallinline" data-name="hd_max" placeholder="0" aria-label="Maximum Hit Dice"></field-editable>
                </dd>
            </div>
            <div class="with_icon">
                <dt>Armor Class</dt><dd><field-editable data-name="armor_class" placeholder="10" class="small"></field-editable></dd>
            </div>
            <div class="with_icon">
                <dt>Hit Points</dt>
                <dd>
                    <field-editable class="smallinline" data-name="hp_cur" placeholder="0" aria-label="Current Hit Points"></field-editable> <strong>/</strong> <field-editable class="smallinline" data-name="hp_max" placeholder="0" aria-label="Maximum Hit Points"></field-editable>
                </dd>
            </div>
            <div>
                <dt>Death Save Success/Fail</dt>
                <dd>
                    <input type="number" class="small" name="death_success" data-name="deathSave" data-subfield="success" value="0" min="0" max="3" aria-label="Death Save Successes" />
                    <strong>/</strong>
                    <input type="number" class="small" name="death_fail" data-name="deathSave" data-subfield="fail" value="0" min="0" max="3" aria-label="Death Save Fails" />
                </dd>
            </div>
            <div class="with_icon">
                <dt>Class Points</dt>
                <dd>
                    <input type="number" class="small" data-name="class_points" data-subfield="cur" placeholder="0" min="0" aria-label="Current Class Points"/> <strong>/</strong> <input type="number" class="small" data-name="class_points" data-subfield="max" placeholder="0" min="0" aria-label="Maximum Class Points" />
                </dd>
            </div>
        </dl>
    </section>

    <section>
        <h2 id="page-attributes">Attributes</h2>
        <section class="pc-attributes" aria-labelledby="page-attributes" role="list">
            <attr-listing data-name="str">Str</attr-listing>
            <attr-listing data-name="dex">Dex</attr-listing>
            <attr-listing data-name="con">Con</attr-listing>
            <attr-listing data-name="intel">Int</attr-listing>
            <attr-listing data-name="wis">Wis</attr-listing>
            <attr-listing data-name="cha">Cha</attr-listing>
        </section>

        <h2 id="page-skills">Skills</h2>
        <section class="pc-skills" aria-labelledby="ppage-skills" role="list">
            <skill-listing data-name="skills" data-subfield="acrobatics">Acrobatics (Dex)</skill-listing>
            <skill-listing data-name="skills" data-subfield="animal_handling">Animal Handling (Wis)</skill-listing>
            <skill-listing data-name="skills" data-subfield="arcana">Arcana (Int)</skill-listing>
            <skill-listing data-name="skills" data-subfield="athletics">Athletics (Str)</skill-listing>
            <skill-listing data-name="skills" data-subfield="deception">Deception (Cha)</skill-listing>
            <skill-listing data-name="skills" data-subfield="history">History (Int)</skill-listing>
            <skill-listing data-name="skills" data-subfield="insight">Insight (Wis)</skill-listing>
            <skill-listing data-name="skills" data-subfield="intimidation">Intimidation (Cha)</skill-listing>
            <skill-listing data-name="skills" data-subfield="investigation">Investigation (Int)</skill-listing>
            <skill-listing data-name="skills" data-subfield="medicine">Medicine (Wis)</skill-listing>
            <skill-listing data-name="skills" data-subfield="nature">Nature (Int)</skill-listing>
            <skill-listing data-name="skills" data-subfield="perception">Perception (Wis)</skill-listing>
            <skill-listing data-name="skills" data-subfield="performance">Performance (Cha)</skill-listing>
            <skill-listing data-name="skills" data-subfield="persuasion">Persuasion (Cha)</skill-listing>
            <skill-listing data-name="skills" data-subfield="religion">Religion (Int)</skill-listing>
            <skill-listing data-name="skills" data-subfield="sleight_of_hand">Sleight of Hand (Dex)</skill-listing>
            <skill-listing data-name="skills" data-subfield="stealth">Stealth (Dex)</skill-listing>
            <skill-listing data-name="skills" data-subfield="survival">Survival (Wis)</skill-listing>
        </section>
    </section>

    <section class="grid-span-col-2">
        <h2>Dice Roller</h2>
        <dice-roller>
            <button type="button" slot="rollbuttons" data-die="1d20">1d20</button>
            <button type="button" slot="rollbuttons" data-die="1d12">1d12</button>
            <button type="button" slot="rollbuttons" data-die="1d10">1d10</button>
            <button type="button" slot="rollbuttons" data-die="1d8">1d8</button>
            <button type="button" slot="rollbuttons" data-die="1d6">1d6</button>
            <button type="button" slot="rollbuttons" data-die="1d4">1d4</button>
        </dice-roller>
        <h2>Weapons & Attacks</h2>
        <table-editable columns="Name||Attack||Damage||Notes" data-name="weapons"></table-editable>

        <h2>Features & Traits</h2>
        <simple-list data-name="features"></simple-list>

        <h2>Other Proficiencies</h2>
        <field-editable class="largearea" data-name="proficiencies_other"></field-editable>

        <h2>Equipment</h2>
        <simple-list data-name="equipment"></simple-list>

        <dl class="field">
            <div>
                <dt>CP</dt><dd><field-editable data-name="cp" placeholder="0" class="small"></field-editable></dd>
                <dt>SP</dt><dd><field-editable data-name="sp" placeholder="0" class="small"></field-editable></dd>
            </div>
            <div>
                <dt>GP</dt><dd><field-editable data-name="gp" placeholder="0" class="small"></field-editable></dd>
                <dt>PP</dt><dd><field-editable data-name="pp" placeholder="0" class="small"></field-editable></dd>
            </div>
        </dl>
    </section>

    <section class="fullwidth">
        <h2 id="page-spells">Spells</h2>

        <dl class="field">
            <div>
                <dt>Spell Ability</dt><dd><field-editable data-name="spell_ability"></field-editable></dd>
            </div>
            <div>
                <dt>Spell Save DC</dt><dd><field-editable data-name="spell_save"></field-editable></dd>
            </div>
            <div>
                <dt>Spell Attack Bonus</dt><dd><field-editable data-name="spell_attack"></field-editable></dd>
            </div>
        </dl>

    <h3>Spell Slots</h3>

    <dl class="field">
        <div>
            <dt>1st</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="1" aria-label="Current spell slots: Level 1" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="1" aria-label="Max spell slots: Level 1" min="0" value="0" />
            </dd>
            <dt>2nd</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="2" aria-label="Current spell slots: Level 2" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="2" aria-label="Max spell slots: Level 2" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>3rd</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="3" aria-label="Current spell slots: Level 3" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="3" aria-label="Max spell slots: Level 3" min="0" value="0" />
            </dd>
            <dt>4th</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="4" aria-label="Current spell slots: Level 4" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="4" aria-label="Max spell slots: Level 4" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>5th</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="5" aria-label="Current spell slots: Level 5" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="5" aria-label="Max spell slots: Level 5" min="0" value="0" />
            </dd>
            <dt>6th</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="6" aria-label="Current spell slots: Level 6" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="6" aria-label="Max spell slots: Level 6" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>7th</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="7" aria-label="Current spell slots: Level 7" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="7" aria-label="Max spell slots: Level 7" min="0" value="0" />
            </dd>
            <dt>8th</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="8" aria-label="Current spell slots: Level 8" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="8" aria-label="Max spell slots: Level 8" min="0" value="0" />
            </dd>
        </div>
        <div>
            <dt>9th</dt>
            <dd>
                <input type="number" class="small" data-name="spell_slots_cur" data-subfield="9" aria-label="Current spell slots: Level 9" min="0" />
                <strong>/</strong>
                <input type="number" class="small" data-name="spell_slots" data-subfield="9" aria-label="Max spell slots: Level 9" min="0" value="0" />
            </dd>
        </div>
    </dl>
</section>

    <section>
        <h3>Cantrips <span><add-spell-button data-level="0"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="0"></simple-list>
    </section>
    <section hidden>
        <h3>1st <span><add-spell-button data-level="1"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="1"></simple-list>
    </section>
    <section hidden>
        <h3>2nd <span><add-spell-button data-level="2"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="2"></simple-list>
    </section>
    <section hidden>
        <h3>3rd <span><add-spell-button data-level="3"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="3"></simple-list>
    </section>
    <section hidden>
        <h3>4th <span><add-spell-button data-level="4"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="4"></simple-list>
    </section>
    <section hidden>
        <h3>5th <span><add-spell-button data-level="5"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="5"></simple-list>
    </section>
    <section hidden>
        <h3>6th <span><add-spell-button data-level="6"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="6"></simple-list>
    </section>
    <section hidden>
        <h3>7th <span><add-spell-button data-level="7"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="7"></simple-list>
    </section>
    <section hidden>
        <h3>8th <span><add-spell-button data-level="8"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="8"></simple-list>
    </section>
    <section hidden>
        <h3>9th <span><add-spell-button data-level="9"></add-spell-button></span></h3>
        <simple-list data-name="spells" data-subfield="9"></simple-list>
    </section>
</section>

<section id="pane-notes" role="tabpanel" aria-labelledby="tab-notes" hidden class="grid">
    <section>
        <h2>NPCs</h2>
        <note-list data-name="npcs"></note-list>

        <h2>Personality</h2>
        <h3>Traits</h3>
        <field-editable class="smallarea" data-name="traits"></field-editable>
        <h3>Ideals</h3>
        <field-editable class="smallarea" data-name="ideals"></field-editable>
        <h3>Bonds</h3>
        <field-editable class="smallarea" data-name="bonds"></field-editable>
        <h3>Flaws</h3>
        <field-editable class="smallarea" data-name="flaws"></field-editable>
        <h3>Appearance</h3>
        <field-editable class="smallarea" data-name="appearance"></field-editable>
        <h2>Languages</h2>
        <field-editable class="smallarea" data-name="languages"></field-editable>
        <h2>Character Notes</h2>
        <field-editable class="largearea" data-name="notes"></field-editable>
    </section>

    <section>
        <h2>Inventory</h2>
        <simple-list data-name="inventory"></simple-list>
    </section>

    <section>
        <h2>Special Items</h2>
        
        <field-editable data-name="special_item_1_name" placeholder="Item Name"></field-editable>
        <field-editable class="largearea" data-name="special_item_1_desc" placeholder="Item Description"></field-editable>
        
        <field-editable data-name="special_item_2_name" placeholder="Item Name"></field-editable>
        <field-editable class="largearea" data-name="special_item_2_desc" placeholder="Item Description"></field-editable>
        
        <field-editable data-name="special_item_3_name" placeholder="Item Name"></field-editable>
        <field-editable class="largearea" data-name="special_item_3_desc" placeholder="Item Description"></field-editable>
        
        <field-editable data-name="special_item_4_name" placeholder="Item Name"></field-editable>
        <field-editable class="largearea" data-name="special_item_4_desc" placeholder="Item Description"></field-editable>
        
        <field-editable data-name="special_item_5_name" placeholder="Item Name"></field-editable>
        <field-editable class="largearea" data-name="special_item_5_desc" placeholder="Item Description"></field-editable>
    </section>
</section>

<section id="pane-spelllist" role="tabpanel" aria-labelledby="tab-spelllist" hidden class="grid">
    <section class="fullwidth">
        <div class="spelllist-header">
            <div><strong>Spellcasting Ability:</strong> <field-editable data-name="spelllist_ability"></field-editable></div>
            <div><strong>Spell Attack Modifier:</strong> <field-editable data-name="spelllist_attack"></field-editable></div>
            <div><strong>Spell Save DC:</strong> <field-editable data-name="spelllist_dc"></field-editable></div>
        </div>
    </section>

    <!-- Column 1: Cantrips, Level 3, Level 6, Level 9 -->
    <section>
        <div class="spell-section">
            <h2>Cantrips</h2>
            <div class="spell-entry"><field-editable data-name="cantrip_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="cantrip_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="cantrip_1_range" placeholder="Range"></field-editable><field-editable data-name="cantrip_1_target" placeholder="Target"></field-editable><field-editable data-name="cantrip_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="cantrip_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="cantrip_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="cantrip_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="cantrip_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="cantrip_2_range" placeholder="Range"></field-editable><field-editable data-name="cantrip_2_target" placeholder="Target"></field-editable><field-editable data-name="cantrip_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="cantrip_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="cantrip_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="cantrip_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="cantrip_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="cantrip_3_range" placeholder="Range"></field-editable><field-editable data-name="cantrip_3_target" placeholder="Target"></field-editable><field-editable data-name="cantrip_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="cantrip_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="cantrip_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="cantrip_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="cantrip_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="cantrip_4_range" placeholder="Range"></field-editable><field-editable data-name="cantrip_4_target" placeholder="Target"></field-editable><field-editable data-name="cantrip_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="cantrip_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="cantrip_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="cantrip_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="cantrip_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="cantrip_5_range" placeholder="Range"></field-editable><field-editable data-name="cantrip_5_target" placeholder="Target"></field-editable><field-editable data-name="cantrip_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="cantrip_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="cantrip_5_desc" placeholder="Description"></field-editable></div>
        </div>
        <div class="spell-section">
            <h2>Level 3</h2>
            <div class="spell-entry"><field-editable data-name="lvl3_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl3_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl3_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl3_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl3_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl3_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl3_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl3_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl3_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl3_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl3_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl3_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl3_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl3_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl3_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl3_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl3_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl3_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl3_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl3_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl3_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl3_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl3_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl3_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl3_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl3_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl3_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl3_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl3_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl3_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl3_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl3_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl3_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl3_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl3_5_desc" placeholder="Description"></field-editable></div>
        </div>
        <div class="spell-section">
            <h2>Level 6</h2>
            <div class="spell-entry"><field-editable data-name="lvl6_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl6_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl6_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl6_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl6_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl6_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl6_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl6_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl6_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl6_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl6_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl6_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl6_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl6_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl6_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl6_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl6_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl6_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl6_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl6_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl6_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl6_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl6_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl6_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl6_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl6_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl6_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl6_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl6_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl6_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl6_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl6_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl6_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl6_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl6_5_desc" placeholder="Description"></field-editable></div>
        </div>
        <div class="spell-section">
            <h2>Level 9</h2>
            <div class="spell-entry"><field-editable data-name="lvl9_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl9_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl9_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl9_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl9_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl9_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl9_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl9_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl9_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl9_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl9_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl9_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl9_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl9_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl9_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl9_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl9_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl9_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl9_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl9_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl9_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl9_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl9_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl9_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl9_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl9_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl9_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl9_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl9_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl9_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl9_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl9_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl9_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl9_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl9_5_desc" placeholder="Description"></field-editable></div>
        </div>
    </section>

    <!-- Column 2: Level 1, Level 4, Level 7 -->
    <section>
        <div class="spell-section">
            <h2>Level 1</h2>
            <div class="spell-entry"><field-editable data-name="lvl1_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl1_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl1_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl1_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl1_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl1_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl1_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl1_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl1_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl1_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl1_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl1_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl1_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl1_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl1_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl1_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl1_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl1_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl1_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl1_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl1_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl1_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl1_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl1_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl1_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl1_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl1_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl1_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl1_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl1_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl1_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl1_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl1_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl1_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl1_5_desc" placeholder="Description"></field-editable></div>
        </div>
        <div class="spell-section">
            <h2>Level 4</h2>
            <div class="spell-entry"><field-editable data-name="lvl4_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl4_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl4_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl4_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl4_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl4_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl4_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl4_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl4_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl4_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl4_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl4_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl4_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl4_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl4_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl4_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl4_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl4_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl4_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl4_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl4_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl4_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl4_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl4_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl4_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl4_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl4_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl4_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl4_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl4_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl4_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl4_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl4_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl4_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl4_5_desc" placeholder="Description"></field-editable></div>
        </div>
        <div class="spell-section">
            <h2>Level 7</h2>
            <div class="spell-entry"><field-editable data-name="lvl7_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl7_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl7_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl7_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl7_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl7_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl7_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl7_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl7_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl7_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl7_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl7_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl7_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl7_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl7_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl7_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl7_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl7_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl7_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl7_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl7_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl7_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl7_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl7_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl7_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl7_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl7_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl7_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl7_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl7_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl7_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl7_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl7_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl7_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl7_5_desc" placeholder="Description"></field-editable></div>
        </div>
    </section>

    <!-- Column 3: Level 2, Level 5, Level 8 -->
    <section>
        <div class="spell-section">
            <h2>Level 2</h2>
            <div class="spell-entry"><field-editable data-name="lvl2_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl2_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl2_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl2_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl2_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl2_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl2_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl2_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl2_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl2_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl2_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl2_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl2_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl2_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl2_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl2_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl2_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl2_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl2_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl2_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl2_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl2_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl2_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl2_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl2_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl2_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl2_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl2_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl2_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl2_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl2_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl2_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl2_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl2_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl2_5_desc" placeholder="Description"></field-editable></div>
        </div>
        <div class="spell-section">
            <h2>Level 5</h2>
            <div class="spell-entry"><field-editable data-name="lvl5_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl5_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl5_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl5_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl5_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl5_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl5_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl5_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl5_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl5_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl5_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl5_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl5_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl5_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl5_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl5_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl5_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl5_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl5_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl5_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl5_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl5_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl5_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl5_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl5_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl5_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl5_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl5_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl5_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl5_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl5_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl5_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl5_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl5_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl5_5_desc" placeholder="Description"></field-editable></div>
        </div>
        <div class="spell-section">
            <h2>Level 8</h2>
            <div class="spell-entry"><field-editable data-name="lvl8_1_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl8_1_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl8_1_range" placeholder="Range"></field-editable><field-editable data-name="lvl8_1_target" placeholder="Target"></field-editable><field-editable data-name="lvl8_1_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl8_1_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl8_1_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl8_2_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl8_2_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl8_2_range" placeholder="Range"></field-editable><field-editable data-name="lvl8_2_target" placeholder="Target"></field-editable><field-editable data-name="lvl8_2_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl8_2_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl8_2_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl8_3_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl8_3_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl8_3_range" placeholder="Range"></field-editable><field-editable data-name="lvl8_3_target" placeholder="Target"></field-editable><field-editable data-name="lvl8_3_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl8_3_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl8_3_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl8_4_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl8_4_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl8_4_range" placeholder="Range"></field-editable><field-editable data-name="lvl8_4_target" placeholder="Target"></field-editable><field-editable data-name="lvl8_4_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl8_4_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl8_4_desc" placeholder="Description"></field-editable></div>
            <div class="spell-entry"><field-editable data-name="lvl8_5_name" placeholder="Spell Name" class="spell-name"></field-editable><div class="spell-row"><field-editable data-name="lvl8_5_time" placeholder="Casting Time"></field-editable><field-editable data-name="lvl8_5_range" placeholder="Range"></field-editable><field-editable data-name="lvl8_5_target" placeholder="Target"></field-editable><field-editable data-name="lvl8_5_comp" placeholder="Components"></field-editable></div><field-editable data-name="lvl8_5_duration" placeholder="Duration"></field-editable><field-editable class="smallarea" data-name="lvl8_5_desc" placeholder="Description"></field-editable></div>
        </div>
    </section>
</section>

<section id="pane-backstory" role="tabpanel" aria-labelledby="tab-backstory" hidden class="grid">
    <section class="fullwidth">
        <h2>Character Backstory</h2>
        <field-editable class="hugearea" data-name="backstory" style="min-height: 600px;"></field-editable>
    </section>
</section>
`;
class Character5eSheet extends SheetView {
    constructor ({
        emitter
    }) {
        super({
            emitter,
            templateNode: template.content.cloneNode(true)
        });
        this.spellButtons = [];
    }

    connectedCallback () {
        super.connectedCallback();
        this.shadowRoot.addEventListener('attributeChange', this._handleAttributeChange.bind(this));
        this.shadowRoot.addEventListener('saveChange', this._handleSaveChange.bind(this));

        this.emitter.on('character:skill:update', this._updateSkillMod, this);
        this.emitter.on('character:proficiency:update', this._updateProficiency, this);
        this.emitter.on('character:attribute:update', this._updateAttributeMods, this);
        this.emitter.on('character:save:update', this._updateSaveMods, this);
        this.emitter.on('character:set', this._addSpellButtonEvents, this);
        this.emitter.on('character:update:spells', this._updateSpellList, this);

        const nav = document.querySelector('footer-nav');
        if (nav) {
            nav.setLinks([
                { label: 'Attributes', tab: 'pane-stats', href: '#page-attributes' },
                { label: 'Skills', tab: 'pane-stats', href: '#page-skills' },
                { label: 'Spells', tab: 'pane-stats', href: '#page-spells' },
                { label: 'Notes', tab: 'pane-notes', href: '#page-notes_adv' }
            ]);
        }
    }

    disconnectedCallback () {
        super.disconnectedCallback();
        this.shadowRoot.removeEventListener('attributeChange', this._handleAttributeChange.bind(this));
        this.shadowRoot.removeEventListener('saveChange', this._handleSaveChange.bind(this));

        this.emitter.off('character:skill:update', this._updateSkillMod, this);
        this.emitter.off('character:proficiency:update', this._updateProficiency, this);
        this.emitter.off('character:attribute:update', this._updateAttributeMods, this);
        this.emitter.off('character:save:update', this._updateSaveMods, this);
        this.emitter.off('character:set', this._addSpellButtonEvents, this);
        this.emitter.off('character:update:spells', this._updateSpellList, this);
    }

    _updateSpellList () {
        const fields = this.shadowRoot.querySelectorAll('[data-name="spells"]');

        fields.forEach((el) => {
            const f = el.dataset.name || '';

            if (typeof this.cur_character[f] === 'undefined' || f === '') {
                return;
            };

            const subf = el.dataset.subfield || '';
            const charValue = (subf !== '') ? this.cur_character[f][subf] : this.cur_character[f];
            const listItems = charValue || [];

            el.clear();

            listItems.forEach((item) => {
                if (!item) {
                    return;
                };
                el.addItem(item);
            });

            if (listItems.length === 0) el.addItem();
        });
    };

    _validateCharacter (character) {
        if (!(character instanceof Character5e)) {
            throw new Error('Invalid character type for this view.');
        }
    }

    _renderCustomFields (el, fieldName, subFieldName, charValue) {
        switch (el.tagName) {
            case 'SKILL-LISTING':
                el.skillValue = charValue || 0;
                el.skillMod = this.cur_character.getSkillMod(subFieldName);
                return true;
            case 'ATTR-LISTING':
                el.attributeScore = charValue || 10;
                el.attributeMod = this.cur_character.attributeMod(fieldName);
                el.saveProficiency = this.cur_character.saves[fieldName];
                el.saveMod = this.cur_character.saveMod(fieldName);
                return true;
        }
        return false;
    }

    _renderCustomPost () {
        this.shadowRoot.querySelector('[data-name="proficiency"]').innerHTML = this.cur_character.proficiency;
    }

    _customFieldChange (ev, field, subfield) {
        if (field === 'skills') {
            const currentVal = this.character.getSkill(subfield);
            if (!this._sameValues(currentVal, ev.detail.value)) {
                this.character.setSkill(subfield, ev.detail.value);
                this._showUnsavedDialog();
            }
            return true;
        }
        if (field === 'weapons') {
            const currentVal = this.character[field];
            const newValue = ev.detail.value.map((object) => {
                return new Weapon(object);
            });
            if (!this._sameValues(currentVal, newValue)) {
                this.character[field] = newValue;
                this._showUnsavedDialog();
            }
            return true;
        }
    }

    _updateSkillMod (skill, modifier) {
        const el = this.shadowRoot.querySelector(`skill-listing[data-subfield="${skill}"]`);
        if (!el) {
            return;
        }
        el.skillMod = modifier;
    }

    _updateProficiency () {
        const proficiency = this.cur_character.proficiency;
        this.shadowRoot.querySelector('[data-name="proficiency"]').innerHTML = proficiency;

        Array.from(this.shadowRoot.querySelectorAll('skill-listing')).forEach((el) => {
            const skill = el.skillName;
            el.skillMod = this.cur_character.getSkillMod(skill);
        });

        Array.from(this.shadowRoot.querySelectorAll('attr-listing')).forEach((el) => {
            const attr = el.attributeName;
            el.saveMod = this.cur_character.saveMod(attr);
        });
    }

    _updateAttributeMods (attribute) {
        const el = this.shadowRoot.querySelector(`attr-listing[data-name=${attribute}]`);
        if (!el) {
            return;
        }
        el.attributeMod = this.cur_character.attributeMod(attribute);
        el.saveMod = this.cur_character.saveMod(attribute);
    }

    _updateSaveMods (attribute) {
        const el = this.shadowRoot.querySelector(`attr-listing[data-name=${attribute}]`);
        if (!el) {
            return;
        }
        el.saveMod = this.cur_character.saveMod(attribute);
    }

    _customNumberInputChange (ev) {
        const field = ev.target.dataset.name;
        const subfield = ev.target.dataset.subfield;
        const newValue = parseInt(ev.target.value, 10);
        if (field === 'spell_slots') {
            const spellList = this.shadowRoot.querySelector(`[data-name="spells"][data-subfield="${subfield}"]`);
            if (!newValue) {
                spellList.parentNode.hidden = true;
            } else {
                spellList.parentNode.hidden = false;
            }
        }
    }

    _handleAttributeChange (ev) {
        const field = ev.detail.field || '';
        if (!field) {
            return;
        }
        this.cur_character.setAttribute(field, ev.detail.value);
        this._showUnsavedDialog();
    }

    _handleSaveChange (ev) {
        const field = ev.detail.field || '';
        if (!field) {
            return;
        }
        this.cur_character.setSaveProficiency(field, ev.detail.value);
        this._showUnsavedDialog();
    }
}

if (!window.customElements.get('sheet-view-5e')) {
    window.customElements.define('sheet-view-5e', Character5eSheet);
}

export default Character5eSheet;