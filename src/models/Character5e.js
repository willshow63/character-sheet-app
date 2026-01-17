/**
 * Model for 5e character data
 */

import { skillAttributes, skillLevels } from './CharacterConstants5e.js';
import Weapon from './Weapon.js';
import Character from './Character.js';

export default class Character5e extends Character {
    constructor ({
        key = '',
        charname = '',
        charclass = '',
        race = '',
        background = '',
        alignment = '',
        level = 1,
        experience = 0,
        inspiration = '',
        armor_class = '',
        speed = 30,
        hp_cur = '',
        hp_max = '',
        hd_cur = '',
        hd_max = '',
        deathSave = {
            success: 0,
            fail: 0
        },
        class_points = {
            cur: 0,
            max: 0
        },
        str = 10,
        dex = 10,
        con = 10,
        intel = 10,
        wis = 10,
        cha = 10,
        saves = {
            str: 0,
            dex: 0,
            con: 0,
            intel: 0,
            wis: 0,
            cha: 0
        },
        skills = {
            acrobatics: 0,
            animal_handling: 0,
            arcana: 0,
            athletics: 0,
            deception: 0,
            history: 0,
            insight: 0,
            intimidation: 0,
            investigation: 0,
            medicine: 0,
            nature: 0,
            perception: 0,
            performance: 0,
            persuasion: 0,
            religion: 0,
            sleight_of_hand: 0,
            stealth: 0,
            survival: 0
        },
        weapons = [],
        proficiencies_other = '',
        languages = '',
        traits = '',
        ideals = '',
        bonds = '',
        flaws = '',
        appearance = '',
        equipment = [],
        cp = '',
        sp = '',
        gp = '',
        pp = '',
        features = [],
        notes = '',
        notes_adv = [],
        notes_cam = [],
        npcs = [],
        factions = [],
        partymembers = [],
        inventory = [],
        special_item_1_name = '',
        special_item_1_desc = '',
        special_item_2_name = '',
        special_item_2_desc = '',
        special_item_3_name = '',
        special_item_3_desc = '',
        special_item_4_name = '',
        special_item_4_desc = '',
        special_item_5_name = '',
        special_item_5_desc = '',
        backstory = '',
        spelllist_ability = '',
        spelllist_attack = '',
        spelllist_dc = '',
        // Cantrips
        cantrip_1_name = '', cantrip_1_time = '', cantrip_1_range = '', cantrip_1_target = '', cantrip_1_comp = '', cantrip_1_duration = '', cantrip_1_desc = '',
        cantrip_2_name = '', cantrip_2_time = '', cantrip_2_range = '', cantrip_2_target = '', cantrip_2_comp = '', cantrip_2_duration = '', cantrip_2_desc = '',
        cantrip_3_name = '', cantrip_3_time = '', cantrip_3_range = '', cantrip_3_target = '', cantrip_3_comp = '', cantrip_3_duration = '', cantrip_3_desc = '',
        cantrip_4_name = '', cantrip_4_time = '', cantrip_4_range = '', cantrip_4_target = '', cantrip_4_comp = '', cantrip_4_duration = '', cantrip_4_desc = '',
        cantrip_5_name = '', cantrip_5_time = '', cantrip_5_range = '', cantrip_5_target = '', cantrip_5_comp = '', cantrip_5_duration = '', cantrip_5_desc = '',
        // Level 1
        lvl1_1_name = '', lvl1_1_time = '', lvl1_1_range = '', lvl1_1_target = '', lvl1_1_comp = '', lvl1_1_duration = '', lvl1_1_desc = '',
        lvl1_2_name = '', lvl1_2_time = '', lvl1_2_range = '', lvl1_2_target = '', lvl1_2_comp = '', lvl1_2_duration = '', lvl1_2_desc = '',
        lvl1_3_name = '', lvl1_3_time = '', lvl1_3_range = '', lvl1_3_target = '', lvl1_3_comp = '', lvl1_3_duration = '', lvl1_3_desc = '',
        lvl1_4_name = '', lvl1_4_time = '', lvl1_4_range = '', lvl1_4_target = '', lvl1_4_comp = '', lvl1_4_duration = '', lvl1_4_desc = '',
        lvl1_5_name = '', lvl1_5_time = '', lvl1_5_range = '', lvl1_5_target = '', lvl1_5_comp = '', lvl1_5_duration = '', lvl1_5_desc = '',
        // Level 2
        lvl2_1_name = '', lvl2_1_time = '', lvl2_1_range = '', lvl2_1_target = '', lvl2_1_comp = '', lvl2_1_duration = '', lvl2_1_desc = '',
        lvl2_2_name = '', lvl2_2_time = '', lvl2_2_range = '', lvl2_2_target = '', lvl2_2_comp = '', lvl2_2_duration = '', lvl2_2_desc = '',
        lvl2_3_name = '', lvl2_3_time = '', lvl2_3_range = '', lvl2_3_target = '', lvl2_3_comp = '', lvl2_3_duration = '', lvl2_3_desc = '',
        lvl2_4_name = '', lvl2_4_time = '', lvl2_4_range = '', lvl2_4_target = '', lvl2_4_comp = '', lvl2_4_duration = '', lvl2_4_desc = '',
        lvl2_5_name = '', lvl2_5_time = '', lvl2_5_range = '', lvl2_5_target = '', lvl2_5_comp = '', lvl2_5_duration = '', lvl2_5_desc = '',
        // Level 3
        lvl3_1_name = '', lvl3_1_time = '', lvl3_1_range = '', lvl3_1_target = '', lvl3_1_comp = '', lvl3_1_duration = '', lvl3_1_desc = '',
        lvl3_2_name = '', lvl3_2_time = '', lvl3_2_range = '', lvl3_2_target = '', lvl3_2_comp = '', lvl3_2_duration = '', lvl3_2_desc = '',
        lvl3_3_name = '', lvl3_3_time = '', lvl3_3_range = '', lvl3_3_target = '', lvl3_3_comp = '', lvl3_3_duration = '', lvl3_3_desc = '',
        lvl3_4_name = '', lvl3_4_time = '', lvl3_4_range = '', lvl3_4_target = '', lvl3_4_comp = '', lvl3_4_duration = '', lvl3_4_desc = '',
        lvl3_5_name = '', lvl3_5_time = '', lvl3_5_range = '', lvl3_5_target = '', lvl3_5_comp = '', lvl3_5_duration = '', lvl3_5_desc = '',
        // Level 4
        lvl4_1_name = '', lvl4_1_time = '', lvl4_1_range = '', lvl4_1_target = '', lvl4_1_comp = '', lvl4_1_duration = '', lvl4_1_desc = '',
        lvl4_2_name = '', lvl4_2_time = '', lvl4_2_range = '', lvl4_2_target = '', lvl4_2_comp = '', lvl4_2_duration = '', lvl4_2_desc = '',
        lvl4_3_name = '', lvl4_3_time = '', lvl4_3_range = '', lvl4_3_target = '', lvl4_3_comp = '', lvl4_3_duration = '', lvl4_3_desc = '',
        lvl4_4_name = '', lvl4_4_time = '', lvl4_4_range = '', lvl4_4_target = '', lvl4_4_comp = '', lvl4_4_duration = '', lvl4_4_desc = '',
        lvl4_5_name = '', lvl4_5_time = '', lvl4_5_range = '', lvl4_5_target = '', lvl4_5_comp = '', lvl4_5_duration = '', lvl4_5_desc = '',
        // Level 5
        lvl5_1_name = '', lvl5_1_time = '', lvl5_1_range = '', lvl5_1_target = '', lvl5_1_comp = '', lvl5_1_duration = '', lvl5_1_desc = '',
        lvl5_2_name = '', lvl5_2_time = '', lvl5_2_range = '', lvl5_2_target = '', lvl5_2_comp = '', lvl5_2_duration = '', lvl5_2_desc = '',
        lvl5_3_name = '', lvl5_3_time = '', lvl5_3_range = '', lvl5_3_target = '', lvl5_3_comp = '', lvl5_3_duration = '', lvl5_3_desc = '',
        lvl5_4_name = '', lvl5_4_time = '', lvl5_4_range = '', lvl5_4_target = '', lvl5_4_comp = '', lvl5_4_duration = '', lvl5_4_desc = '',
        lvl5_5_name = '', lvl5_5_time = '', lvl5_5_range = '', lvl5_5_target = '', lvl5_5_comp = '', lvl5_5_duration = '', lvl5_5_desc = '',
        // Level 6
        lvl6_1_name = '', lvl6_1_time = '', lvl6_1_range = '', lvl6_1_target = '', lvl6_1_comp = '', lvl6_1_duration = '', lvl6_1_desc = '',
        lvl6_2_name = '', lvl6_2_time = '', lvl6_2_range = '', lvl6_2_target = '', lvl6_2_comp = '', lvl6_2_duration = '', lvl6_2_desc = '',
        lvl6_3_name = '', lvl6_3_time = '', lvl6_3_range = '', lvl6_3_target = '', lvl6_3_comp = '', lvl6_3_duration = '', lvl6_3_desc = '',
        lvl6_4_name = '', lvl6_4_time = '', lvl6_4_range = '', lvl6_4_target = '', lvl6_4_comp = '', lvl6_4_duration = '', lvl6_4_desc = '',
        lvl6_5_name = '', lvl6_5_time = '', lvl6_5_range = '', lvl6_5_target = '', lvl6_5_comp = '', lvl6_5_duration = '', lvl6_5_desc = '',
        // Level 7
        lvl7_1_name = '', lvl7_1_time = '', lvl7_1_range = '', lvl7_1_target = '', lvl7_1_comp = '', lvl7_1_duration = '', lvl7_1_desc = '',
        lvl7_2_name = '', lvl7_2_time = '', lvl7_2_range = '', lvl7_2_target = '', lvl7_2_comp = '', lvl7_2_duration = '', lvl7_2_desc = '',
        lvl7_3_name = '', lvl7_3_time = '', lvl7_3_range = '', lvl7_3_target = '', lvl7_3_comp = '', lvl7_3_duration = '', lvl7_3_desc = '',
        lvl7_4_name = '', lvl7_4_time = '', lvl7_4_range = '', lvl7_4_target = '', lvl7_4_comp = '', lvl7_4_duration = '', lvl7_4_desc = '',
        lvl7_5_name = '', lvl7_5_time = '', lvl7_5_range = '', lvl7_5_target = '', lvl7_5_comp = '', lvl7_5_duration = '', lvl7_5_desc = '',
        // Level 8
        lvl8_1_name = '', lvl8_1_time = '', lvl8_1_range = '', lvl8_1_target = '', lvl8_1_comp = '', lvl8_1_duration = '', lvl8_1_desc = '',
        lvl8_2_name = '', lvl8_2_time = '', lvl8_2_range = '', lvl8_2_target = '', lvl8_2_comp = '', lvl8_2_duration = '', lvl8_2_desc = '',
        lvl8_3_name = '', lvl8_3_time = '', lvl8_3_range = '', lvl8_3_target = '', lvl8_3_comp = '', lvl8_3_duration = '', lvl8_3_desc = '',
        lvl8_4_name = '', lvl8_4_time = '', lvl8_4_range = '', lvl8_4_target = '', lvl8_4_comp = '', lvl8_4_duration = '', lvl8_4_desc = '',
        lvl8_5_name = '', lvl8_5_time = '', lvl8_5_range = '', lvl8_5_target = '', lvl8_5_comp = '', lvl8_5_duration = '', lvl8_5_desc = '',
        // Level 9
        lvl9_1_name = '', lvl9_1_time = '', lvl9_1_range = '', lvl9_1_target = '', lvl9_1_comp = '', lvl9_1_duration = '', lvl9_1_desc = '',
        lvl9_2_name = '', lvl9_2_time = '', lvl9_2_range = '', lvl9_2_target = '', lvl9_2_comp = '', lvl9_2_duration = '', lvl9_2_desc = '',
        lvl9_3_name = '', lvl9_3_time = '', lvl9_3_range = '', lvl9_3_target = '', lvl9_3_comp = '', lvl9_3_duration = '', lvl9_3_desc = '',
        lvl9_4_name = '', lvl9_4_time = '', lvl9_4_range = '', lvl9_4_target = '', lvl9_4_comp = '', lvl9_4_duration = '', lvl9_4_desc = '',
        lvl9_5_name = '', lvl9_5_time = '', lvl9_5_range = '', lvl9_5_target = '', lvl9_5_comp = '', lvl9_5_duration = '', lvl9_5_desc = '',
        spell_ability = '',
        spell_save = '',
        spell_attack = '',
        spell_slots = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
        },
        spell_slots_cur = {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
        },
        spells = {
            0: [],
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: []
        },
        updated = '',
        key_prev = '',
        version = ''
    }) {
        super({
            key,
            charname,
            updated,
            key_prev,
            version
        });
        this.charclass = charclass;
        this.race = race;
        this.background = background;
        this.alignment = alignment;
        this._level = level;
        this.experience = experience;
        this.inspiration = inspiration;
        this.armor_class = armor_class;
        this.speed = speed;
        this.hp_cur = hp_cur;
        this.hp_max = hp_max;
        this.hd_cur = hd_cur;
        this.hd_max = hd_max;
        this.deathSave = deathSave;
        this.class_points = class_points;
        this.str = str;
        this.dex = dex;
        this.con = con;
        this.intel = intel;
        this.wis = wis;
        this.cha = cha;
        this.saves = saves;
        this.skills = skills;
        if (typeof this.skills.sleight_of_Hand !== 'undefined') {
            const sleight = this.skills.sleight_of_Hand;
            delete this.skills.sleight_of_Hand;
            this.skills.sleight_of_hand = sleight;
        }

        this.weapons = [];
        weapons.forEach((item) => {
            if (item && typeof item !== 'object') {
                return;
            }
            if (Array.isArray(item)) {
                this.weapons.push(new Weapon({
                    name: item[0] || '',
                    attack: item[1] || '',
                    damage: item[2] || '',
                    notes: item[3] || ''
                }));
                return;
            }
            if (item instanceof Weapon) {
                this.weapons.push(item);
                return;
            }
            this.weapons.push(new Weapon(item));
        });

        this.proficiencies_other = proficiencies_other;
        this.languages = languages;
        this.traits = traits;
        this.ideals = ideals;
        this.bonds = bonds;
        this.flaws = flaws;
        this.appearance = appearance;
        this.equipment = equipment;
        this.cp = cp;
        this.sp = sp;
        this.gp = gp;
        this.pp = pp;
        this.features = features;
        this.notes = notes;
        this.notes_adv = this._convertNotes(notes_adv);
        this.notes_cam = this._convertNotes(notes_cam);
        this.npcs = this._convertNotes(npcs);
        this.factions = this._convertNotes(factions);
        this.partymembers = this._convertNotes(partymembers);
        this.inventory = inventory;
        this.special_item_1_name = special_item_1_name;
        this.special_item_1_desc = special_item_1_desc;
        this.special_item_2_name = special_item_2_name;
        this.special_item_2_desc = special_item_2_desc;
        this.special_item_3_name = special_item_3_name;
        this.special_item_3_desc = special_item_3_desc;
        this.special_item_4_name = special_item_4_name;
        this.special_item_4_desc = special_item_4_desc;
        this.special_item_5_name = special_item_5_name;
        this.special_item_5_desc = special_item_5_desc;
        this.backstory = backstory;
        
        // Spell List tab fields
        this.spelllist_ability = spelllist_ability;
        this.spelllist_attack = spelllist_attack;
        this.spelllist_dc = spelllist_dc;
        
        // Cantrips
        this.cantrip_1_name = cantrip_1_name; this.cantrip_1_time = cantrip_1_time; this.cantrip_1_range = cantrip_1_range; this.cantrip_1_target = cantrip_1_target; this.cantrip_1_comp = cantrip_1_comp; this.cantrip_1_duration = cantrip_1_duration; this.cantrip_1_desc = cantrip_1_desc;
        this.cantrip_2_name = cantrip_2_name; this.cantrip_2_time = cantrip_2_time; this.cantrip_2_range = cantrip_2_range; this.cantrip_2_target = cantrip_2_target; this.cantrip_2_comp = cantrip_2_comp; this.cantrip_2_duration = cantrip_2_duration; this.cantrip_2_desc = cantrip_2_desc;
        this.cantrip_3_name = cantrip_3_name; this.cantrip_3_time = cantrip_3_time; this.cantrip_3_range = cantrip_3_range; this.cantrip_3_target = cantrip_3_target; this.cantrip_3_comp = cantrip_3_comp; this.cantrip_3_duration = cantrip_3_duration; this.cantrip_3_desc = cantrip_3_desc;
        this.cantrip_4_name = cantrip_4_name; this.cantrip_4_time = cantrip_4_time; this.cantrip_4_range = cantrip_4_range; this.cantrip_4_target = cantrip_4_target; this.cantrip_4_comp = cantrip_4_comp; this.cantrip_4_duration = cantrip_4_duration; this.cantrip_4_desc = cantrip_4_desc;
        this.cantrip_5_name = cantrip_5_name; this.cantrip_5_time = cantrip_5_time; this.cantrip_5_range = cantrip_5_range; this.cantrip_5_target = cantrip_5_target; this.cantrip_5_comp = cantrip_5_comp; this.cantrip_5_duration = cantrip_5_duration; this.cantrip_5_desc = cantrip_5_desc;
        // Level 1
        this.lvl1_1_name = lvl1_1_name; this.lvl1_1_time = lvl1_1_time; this.lvl1_1_range = lvl1_1_range; this.lvl1_1_target = lvl1_1_target; this.lvl1_1_comp = lvl1_1_comp; this.lvl1_1_duration = lvl1_1_duration; this.lvl1_1_desc = lvl1_1_desc;
        this.lvl1_2_name = lvl1_2_name; this.lvl1_2_time = lvl1_2_time; this.lvl1_2_range = lvl1_2_range; this.lvl1_2_target = lvl1_2_target; this.lvl1_2_comp = lvl1_2_comp; this.lvl1_2_duration = lvl1_2_duration; this.lvl1_2_desc = lvl1_2_desc;
        this.lvl1_3_name = lvl1_3_name; this.lvl1_3_time = lvl1_3_time; this.lvl1_3_range = lvl1_3_range; this.lvl1_3_target = lvl1_3_target; this.lvl1_3_comp = lvl1_3_comp; this.lvl1_3_duration = lvl1_3_duration; this.lvl1_3_desc = lvl1_3_desc;
        this.lvl1_4_name = lvl1_4_name; this.lvl1_4_time = lvl1_4_time; this.lvl1_4_range = lvl1_4_range; this.lvl1_4_target = lvl1_4_target; this.lvl1_4_comp = lvl1_4_comp; this.lvl1_4_duration = lvl1_4_duration; this.lvl1_4_desc = lvl1_4_desc;
        this.lvl1_5_name = lvl1_5_name; this.lvl1_5_time = lvl1_5_time; this.lvl1_5_range = lvl1_5_range; this.lvl1_5_target = lvl1_5_target; this.lvl1_5_comp = lvl1_5_comp; this.lvl1_5_duration = lvl1_5_duration; this.lvl1_5_desc = lvl1_5_desc;
        // Level 2
        this.lvl2_1_name = lvl2_1_name; this.lvl2_1_time = lvl2_1_time; this.lvl2_1_range = lvl2_1_range; this.lvl2_1_target = lvl2_1_target; this.lvl2_1_comp = lvl2_1_comp; this.lvl2_1_duration = lvl2_1_duration; this.lvl2_1_desc = lvl2_1_desc;
        this.lvl2_2_name = lvl2_2_name; this.lvl2_2_time = lvl2_2_time; this.lvl2_2_range = lvl2_2_range; this.lvl2_2_target = lvl2_2_target; this.lvl2_2_comp = lvl2_2_comp; this.lvl2_2_duration = lvl2_2_duration; this.lvl2_2_desc = lvl2_2_desc;
        this.lvl2_3_name = lvl2_3_name; this.lvl2_3_time = lvl2_3_time; this.lvl2_3_range = lvl2_3_range; this.lvl2_3_target = lvl2_3_target; this.lvl2_3_comp = lvl2_3_comp; this.lvl2_3_duration = lvl2_3_duration; this.lvl2_3_desc = lvl2_3_desc;
        this.lvl2_4_name = lvl2_4_name; this.lvl2_4_time = lvl2_4_time; this.lvl2_4_range = lvl2_4_range; this.lvl2_4_target = lvl2_4_target; this.lvl2_4_comp = lvl2_4_comp; this.lvl2_4_duration = lvl2_4_duration; this.lvl2_4_desc = lvl2_4_desc;
        this.lvl2_5_name = lvl2_5_name; this.lvl2_5_time = lvl2_5_time; this.lvl2_5_range = lvl2_5_range; this.lvl2_5_target = lvl2_5_target; this.lvl2_5_comp = lvl2_5_comp; this.lvl2_5_duration = lvl2_5_duration; this.lvl2_5_desc = lvl2_5_desc;
        // Level 3
        this.lvl3_1_name = lvl3_1_name; this.lvl3_1_time = lvl3_1_time; this.lvl3_1_range = lvl3_1_range; this.lvl3_1_target = lvl3_1_target; this.lvl3_1_comp = lvl3_1_comp; this.lvl3_1_duration = lvl3_1_duration; this.lvl3_1_desc = lvl3_1_desc;
        this.lvl3_2_name = lvl3_2_name; this.lvl3_2_time = lvl3_2_time; this.lvl3_2_range = lvl3_2_range; this.lvl3_2_target = lvl3_2_target; this.lvl3_2_comp = lvl3_2_comp; this.lvl3_2_duration = lvl3_2_duration; this.lvl3_2_desc = lvl3_2_desc;
        this.lvl3_3_name = lvl3_3_name; this.lvl3_3_time = lvl3_3_time; this.lvl3_3_range = lvl3_3_range; this.lvl3_3_target = lvl3_3_target; this.lvl3_3_comp = lvl3_3_comp; this.lvl3_3_duration = lvl3_3_duration; this.lvl3_3_desc = lvl3_3_desc;
        this.lvl3_4_name = lvl3_4_name; this.lvl3_4_time = lvl3_4_time; this.lvl3_4_range = lvl3_4_range; this.lvl3_4_target = lvl3_4_target; this.lvl3_4_comp = lvl3_4_comp; this.lvl3_4_duration = lvl3_4_duration; this.lvl3_4_desc = lvl3_4_desc;
        this.lvl3_5_name = lvl3_5_name; this.lvl3_5_time = lvl3_5_time; this.lvl3_5_range = lvl3_5_range; this.lvl3_5_target = lvl3_5_target; this.lvl3_5_comp = lvl3_5_comp; this.lvl3_5_duration = lvl3_5_duration; this.lvl3_5_desc = lvl3_5_desc;
        // Level 4
        this.lvl4_1_name = lvl4_1_name; this.lvl4_1_time = lvl4_1_time; this.lvl4_1_range = lvl4_1_range; this.lvl4_1_target = lvl4_1_target; this.lvl4_1_comp = lvl4_1_comp; this.lvl4_1_duration = lvl4_1_duration; this.lvl4_1_desc = lvl4_1_desc;
        this.lvl4_2_name = lvl4_2_name; this.lvl4_2_time = lvl4_2_time; this.lvl4_2_range = lvl4_2_range; this.lvl4_2_target = lvl4_2_target; this.lvl4_2_comp = lvl4_2_comp; this.lvl4_2_duration = lvl4_2_duration; this.lvl4_2_desc = lvl4_2_desc;
        this.lvl4_3_name = lvl4_3_name; this.lvl4_3_time = lvl4_3_time; this.lvl4_3_range = lvl4_3_range; this.lvl4_3_target = lvl4_3_target; this.lvl4_3_comp = lvl4_3_comp; this.lvl4_3_duration = lvl4_3_duration; this.lvl4_3_desc = lvl4_3_desc;
        this.lvl4_4_name = lvl4_4_name; this.lvl4_4_time = lvl4_4_time; this.lvl4_4_range = lvl4_4_range; this.lvl4_4_target = lvl4_4_target; this.lvl4_4_comp = lvl4_4_comp; this.lvl4_4_duration = lvl4_4_duration; this.lvl4_4_desc = lvl4_4_desc;
        this.lvl4_5_name = lvl4_5_name; this.lvl4_5_time = lvl4_5_time; this.lvl4_5_range = lvl4_5_range; this.lvl4_5_target = lvl4_5_target; this.lvl4_5_comp = lvl4_5_comp; this.lvl4_5_duration = lvl4_5_duration; this.lvl4_5_desc = lvl4_5_desc;
        // Level 5
        this.lvl5_1_name = lvl5_1_name; this.lvl5_1_time = lvl5_1_time; this.lvl5_1_range = lvl5_1_range; this.lvl5_1_target = lvl5_1_target; this.lvl5_1_comp = lvl5_1_comp; this.lvl5_1_duration = lvl5_1_duration; this.lvl5_1_desc = lvl5_1_desc;
        this.lvl5_2_name = lvl5_2_name; this.lvl5_2_time = lvl5_2_time; this.lvl5_2_range = lvl5_2_range; this.lvl5_2_target = lvl5_2_target; this.lvl5_2_comp = lvl5_2_comp; this.lvl5_2_duration = lvl5_2_duration; this.lvl5_2_desc = lvl5_2_desc;
        this.lvl5_3_name = lvl5_3_name; this.lvl5_3_time = lvl5_3_time; this.lvl5_3_range = lvl5_3_range; this.lvl5_3_target = lvl5_3_target; this.lvl5_3_comp = lvl5_3_comp; this.lvl5_3_duration = lvl5_3_duration; this.lvl5_3_desc = lvl5_3_desc;
        this.lvl5_4_name = lvl5_4_name; this.lvl5_4_time = lvl5_4_time; this.lvl5_4_range = lvl5_4_range; this.lvl5_4_target = lvl5_4_target; this.lvl5_4_comp = lvl5_4_comp; this.lvl5_4_duration = lvl5_4_duration; this.lvl5_4_desc = lvl5_4_desc;
        this.lvl5_5_name = lvl5_5_name; this.lvl5_5_time = lvl5_5_time; this.lvl5_5_range = lvl5_5_range; this.lvl5_5_target = lvl5_5_target; this.lvl5_5_comp = lvl5_5_comp; this.lvl5_5_duration = lvl5_5_duration; this.lvl5_5_desc = lvl5_5_desc;
        // Level 6
        this.lvl6_1_name = lvl6_1_name; this.lvl6_1_time = lvl6_1_time; this.lvl6_1_range = lvl6_1_range; this.lvl6_1_target = lvl6_1_target; this.lvl6_1_comp = lvl6_1_comp; this.lvl6_1_duration = lvl6_1_duration; this.lvl6_1_desc = lvl6_1_desc;
        this.lvl6_2_name = lvl6_2_name; this.lvl6_2_time = lvl6_2_time; this.lvl6_2_range = lvl6_2_range; this.lvl6_2_target = lvl6_2_target; this.lvl6_2_comp = lvl6_2_comp; this.lvl6_2_duration = lvl6_2_duration; this.lvl6_2_desc = lvl6_2_desc;
        this.lvl6_3_name = lvl6_3_name; this.lvl6_3_time = lvl6_3_time; this.lvl6_3_range = lvl6_3_range; this.lvl6_3_target = lvl6_3_target; this.lvl6_3_comp = lvl6_3_comp; this.lvl6_3_duration = lvl6_3_duration; this.lvl6_3_desc = lvl6_3_desc;
        this.lvl6_4_name = lvl6_4_name; this.lvl6_4_time = lvl6_4_time; this.lvl6_4_range = lvl6_4_range; this.lvl6_4_target = lvl6_4_target; this.lvl6_4_comp = lvl6_4_comp; this.lvl6_4_duration = lvl6_4_duration; this.lvl6_4_desc = lvl6_4_desc;
        this.lvl6_5_name = lvl6_5_name; this.lvl6_5_time = lvl6_5_time; this.lvl6_5_range = lvl6_5_range; this.lvl6_5_target = lvl6_5_target; this.lvl6_5_comp = lvl6_5_comp; this.lvl6_5_duration = lvl6_5_duration; this.lvl6_5_desc = lvl6_5_desc;
        // Level 7
        this.lvl7_1_name = lvl7_1_name; this.lvl7_1_time = lvl7_1_time; this.lvl7_1_range = lvl7_1_range; this.lvl7_1_target = lvl7_1_target; this.lvl7_1_comp = lvl7_1_comp; this.lvl7_1_duration = lvl7_1_duration; this.lvl7_1_desc = lvl7_1_desc;
        this.lvl7_2_name = lvl7_2_name; this.lvl7_2_time = lvl7_2_time; this.lvl7_2_range = lvl7_2_range; this.lvl7_2_target = lvl7_2_target; this.lvl7_2_comp = lvl7_2_comp; this.lvl7_2_duration = lvl7_2_duration; this.lvl7_2_desc = lvl7_2_desc;
        this.lvl7_3_name = lvl7_3_name; this.lvl7_3_time = lvl7_3_time; this.lvl7_3_range = lvl7_3_range; this.lvl7_3_target = lvl7_3_target; this.lvl7_3_comp = lvl7_3_comp; this.lvl7_3_duration = lvl7_3_duration; this.lvl7_3_desc = lvl7_3_desc;
        this.lvl7_4_name = lvl7_4_name; this.lvl7_4_time = lvl7_4_time; this.lvl7_4_range = lvl7_4_range; this.lvl7_4_target = lvl7_4_target; this.lvl7_4_comp = lvl7_4_comp; this.lvl7_4_duration = lvl7_4_duration; this.lvl7_4_desc = lvl7_4_desc;
        this.lvl7_5_name = lvl7_5_name; this.lvl7_5_time = lvl7_5_time; this.lvl7_5_range = lvl7_5_range; this.lvl7_5_target = lvl7_5_target; this.lvl7_5_comp = lvl7_5_comp; this.lvl7_5_duration = lvl7_5_duration; this.lvl7_5_desc = lvl7_5_desc;
        // Level 8
        this.lvl8_1_name = lvl8_1_name; this.lvl8_1_time = lvl8_1_time; this.lvl8_1_range = lvl8_1_range; this.lvl8_1_target = lvl8_1_target; this.lvl8_1_comp = lvl8_1_comp; this.lvl8_1_duration = lvl8_1_duration; this.lvl8_1_desc = lvl8_1_desc;
        this.lvl8_2_name = lvl8_2_name; this.lvl8_2_time = lvl8_2_time; this.lvl8_2_range = lvl8_2_range; this.lvl8_2_target = lvl8_2_target; this.lvl8_2_comp = lvl8_2_comp; this.lvl8_2_duration = lvl8_2_duration; this.lvl8_2_desc = lvl8_2_desc;
        this.lvl8_3_name = lvl8_3_name; this.lvl8_3_time = lvl8_3_time; this.lvl8_3_range = lvl8_3_range; this.lvl8_3_target = lvl8_3_target; this.lvl8_3_comp = lvl8_3_comp; this.lvl8_3_duration = lvl8_3_duration; this.lvl8_3_desc = lvl8_3_desc;
        this.lvl8_4_name = lvl8_4_name; this.lvl8_4_time = lvl8_4_time; this.lvl8_4_range = lvl8_4_range; this.lvl8_4_target = lvl8_4_target; this.lvl8_4_comp = lvl8_4_comp; this.lvl8_4_duration = lvl8_4_duration; this.lvl8_4_desc = lvl8_4_desc;
        this.lvl8_5_name = lvl8_5_name; this.lvl8_5_time = lvl8_5_time; this.lvl8_5_range = lvl8_5_range; this.lvl8_5_target = lvl8_5_target; this.lvl8_5_comp = lvl8_5_comp; this.lvl8_5_duration = lvl8_5_duration; this.lvl8_5_desc = lvl8_5_desc;
        // Level 9
        this.lvl9_1_name = lvl9_1_name; this.lvl9_1_time = lvl9_1_time; this.lvl9_1_range = lvl9_1_range; this.lvl9_1_target = lvl9_1_target; this.lvl9_1_comp = lvl9_1_comp; this.lvl9_1_duration = lvl9_1_duration; this.lvl9_1_desc = lvl9_1_desc;
        this.lvl9_2_name = lvl9_2_name; this.lvl9_2_time = lvl9_2_time; this.lvl9_2_range = lvl9_2_range; this.lvl9_2_target = lvl9_2_target; this.lvl9_2_comp = lvl9_2_comp; this.lvl9_2_duration = lvl9_2_duration; this.lvl9_2_desc = lvl9_2_desc;
        this.lvl9_3_name = lvl9_3_name; this.lvl9_3_time = lvl9_3_time; this.lvl9_3_range = lvl9_3_range; this.lvl9_3_target = lvl9_3_target; this.lvl9_3_comp = lvl9_3_comp; this.lvl9_3_duration = lvl9_3_duration; this.lvl9_3_desc = lvl9_3_desc;
        this.lvl9_4_name = lvl9_4_name; this.lvl9_4_time = lvl9_4_time; this.lvl9_4_range = lvl9_4_range; this.lvl9_4_target = lvl9_4_target; this.lvl9_4_comp = lvl9_4_comp; this.lvl9_4_duration = lvl9_4_duration; this.lvl9_4_desc = lvl9_4_desc;
        this.lvl9_5_name = lvl9_5_name; this.lvl9_5_time = lvl9_5_time; this.lvl9_5_range = lvl9_5_range; this.lvl9_5_target = lvl9_5_target; this.lvl9_5_comp = lvl9_5_comp; this.lvl9_5_duration = lvl9_5_duration; this.lvl9_5_desc = lvl9_5_desc;

        this.spell_ability = spell_ability;
        this.spell_save = spell_save;
        this.spell_attack = spell_attack;
        this.spell_slots = spell_slots;
        this.spell_slots_cur = spell_slots_cur;
        this.spells = spells;

        this.emitter = null;
    }
    get className () {
        return 'Character5e';
    }
    get ruleset () {
        return '5e';
    }
    get level () {
        return this._level;
    }
    set level (newVal) {
        const cur = this.level;
        if (newVal === cur) {
            return;
        }
        const prof = this.proficiency;
        this._level = newVal;
        const newProf = this.proficiency;
        if (prof === newProf) {
            return;
        }
        if (this.emitter) {
            this.emitter.trigger('character:proficiency:update');
        }
    }
    get proficiency () {
        const bonus = Math.ceil(this.level / 4) + 1;
        return `+${bonus}`;
    }
    setAttribute (attribute, value) {
        if (!this[attribute]) {
            return;
        }
        const curVal = this[attribute];
        if (curVal === value) {
            return;
        }
        this[attribute] = value;
        if (this.emitter) {
            this.emitter.trigger('character:attribute:update', attribute);
            for (const skill in skillAttributes) {
                if (skillAttributes[skill] === attribute) {
                    this.emitter.trigger('character:skill:update', skill, this.getSkillMod(skill));
                }
            }
        }
    }
    attributeMod (attribute) {
        const score = this[attribute];
        if (Number.isNaN(score)) {
            return '0';
        }
        const raw = Math.floor((score - 10) / 2);
        return (raw > 0) ? `+${raw}` : raw.toString();
    }
    isProficient (skill) {
        return this.skills[skill] > skillLevels.UNSKILLED;
    }
    isExpert (skill) {
        return this.skills[skill] === skillLevels.EXPERT;
    }
    getSkillMod (skill) {
        let raw = 0;
        const skillLevel = this.skills[skill];
        if (typeof skillLevel === 'undefined') {
            return 0;
        }
        const attribute = skillAttributes[skill];
        if (attribute) {
            raw += parseInt(this.attributeMod(attribute), 10);
        }
        const prof = parseInt(this.proficiency, 10);
        if (this.isProficient(skill)) {
            raw += prof;
        }
        if (this.isExpert(skill)) {
            raw += prof;
        }
        return (raw > 0) ? `+${raw}` : raw.toString();
    }
    getSkill (skill) {
        const value = this.skills[skill];
        if (typeof value === 'undefined') {
            return null;
        }
        return value;
    }
    setSkill (skill, newValue) {
        const curValue = this.getSkill(skill);
        if (curValue === null || curValue === newValue) {
            return;
        }
        this.skills[skill] = newValue;
        if (this.emitter) {
            this.emitter.trigger('character:skill:update', skill, this.getSkillMod(skill));
        }
    }
    isSaveProficient (attr) {
        return (this.saves[attr] || 0);
    }
    saveMod (attr) {
        let profMod = 0;
        if (this.isSaveProficient(attr)) {
            profMod = parseInt(this.proficiency, 10);
        }
        const raw = 0 + profMod + parseInt(this.attributeMod(attr), 10);
        return (raw > 0) ? `+${raw}` : raw.toString();
    }
    setSaveProficiency (attr, checked) {
        const cur = this.saves[attr];
        if (typeof cur === 'undefined') {
            return;
        }
        if (cur === checked) {
            return;
        }
        this.saves[attr] = (checked ? 1 : 0);
        if (this.emitter) {
            this.emitter.trigger('character:save:update', attr);
        }
    }
    getSpells (level = undefined) {
        if (level in this.spells) {
            return this.spells[level];
        }
        return this.spells;
    }
    setSpells (spell, level) {
        const spells = this.spells[level];
        if (typeof spells === 'undefined') {
            return;
        }
        if (typeof spell === 'object') {
            spell = spell.name;
        }
        const newSpellsList = [...spells, spell];
        const newSpellSlotsLength = this.spell_slots[level] + 1;
        this.spell_slots[level] = newSpellSlotsLength;
        this.spells[level] = newSpellsList;
        if (this.emitter) {
            this.emitter.trigger('character:update:spells');
            this.emitter.trigger('dialog:save:show');
        }
    }
};