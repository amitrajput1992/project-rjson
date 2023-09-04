import { expect } from "chai";
import { ClipboardData, RT, RecordFactory, RecordMap, RecordNode, createRecord, rtp } from "../../src/r/R";
import { ElementType, elementDisplayNames } from "../../src/r/definitions/elements";
import { ProjectFactory } from "../../src/r/recordFactories/ProjectFactory";
import { PredefinedVariableName, VarCategory, VariableType } from "../../src/r/definitions/variables";
import { jsUtils, pathUtils } from "@gmetrixr/gdash";
import { ElementFactory } from "../../src/r/recordFactories/ElementFactory";
import { fn } from "../../src/r/definitions";
import fs from "fs";
import threeScenesJson from "./jsons/r3fJsons/project/threeScenesJson.json";
import manishJson from "./jsons/r3fJsons/project/manish.json";
import clipboardData from "./jsons/r3fJsons/clipboard/project.json";
import projectJson from "./jsons/project.json";

const { generateIdV2, deepClone } = jsUtils;

const gvsMap: RecordMap<RT.variable> = {
  "9605223715681184": {
    "name": "global_var_1",
    "type": "variable",
    "props": {
      "var_type": "boolean",
      "var_track": true,
      "var_default": false,
      "var_category": "global"
    }
  },
  "4941667907475536": {
    "name": "global_var_2",
    "type": "variable",
    "props": {
      "var_type": "string",
      "var_track": true,
      "var_default": "Hi there! asdfsadf",
      "var_category": "global"
    }
  },
  "4547323213035995": {
    "name": "global_var_3",
    "type": "variable",
    "props": {
      "var_type": "string",
      "var_track": true,
      "var_default": "kldsajfsdlkf",
      "var_category": "global"
    }
  }
}

const sourceMap = {
	230739: {
		id: 230739,
		name: "test",
		file_paths: {},
		file_urls: {
			o: "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/330018d4-9c9a-401f-81ca-537677aa1ccc/o/btn_play_2.png",
			t: "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/330018d4-9c9a-401f-81ca-537677aa1ccc/t/btn_play_2.png"
		},
		type: pathUtils.FileType.IMAGE
	}
}

const avatarSourceMap = {
  3769: {
    id: 3769,
    name: "Character (22).glb",
    file_paths: {
      "o": "o/Character.glb",
      "t": "t/Character.png",
      "glb": "glb/Character_q_medium.glb",
      "glb_low": "glb/Character_q_low.glb",
      "glb_high": "glb/Character_q_high.glb",
      "glb_medium": "glb/Character_q_medium.glb"
    },
    file_urls: {
      "o": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/395d5583-8087-4e1f-bd71-67d7d0390f43/o/Character.glb",
      "t": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/395d5583-8087-4e1f-bd71-67d7d0390f43/t/Character.png",
      "glb": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/395d5583-8087-4e1f-bd71-67d7d0390f43/glb/Character_q_medium.glb",
      "glb_low": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/395d5583-8087-4e1f-bd71-67d7d0390f43/glb/Character_q_low.glb",
      "glb_high": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/395d5583-8087-4e1f-bd71-67d7d0390f43/glb/Character_q_high.glb",
      "glb_medium": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/395d5583-8087-4e1f-bd71-67d7d0390f43/glb/Character_q_medium.glb"
    },
    size: 10059744,
    type: pathUtils.FileType.CHARACTER_RPM,
    metadata: {
      "ext": "glb",
      "isRPM": true,
      "mimeType": "model/gltf-binary",
      "rpmAvatarGender": "feminine"
    }
  },
  3262: {
    id: 3262,
    name: "Character (19).glb",
    file_paths: {
      "o": "o/Character.glb",
      "t": "t/Character.png",
      "glb": "glb/Character_q_medium.glb",
      "glb_low": "glb/Character_q_low.glb",
      "glb_high": "glb/Character_q_high.glb",
      "glb_medium": "glb/Character_q_medium.glb"
    },
    file_urls: {
      "o": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/faa4c719-c0c4-4049-bf96-4739548051cb/o/Character.glb",
      "t": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/faa4c719-c0c4-4049-bf96-4739548051cb/t/Character.png",
      "glb": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/faa4c719-c0c4-4049-bf96-4739548051cb/glb/Character_q_medium.glb",
      "glb_low": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/faa4c719-c0c4-4049-bf96-4739548051cb/glb/Character_q_low.glb",
      "glb_high": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/faa4c719-c0c4-4049-bf96-4739548051cb/glb/Character_q_high.glb",
      "glb_medium": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/faa4c719-c0c4-4049-bf96-4739548051cb/glb/Character_q_medium.glb"
    },
    size: 11586460,
    type: pathUtils.FileType.CHARACTER_RPM,
    metadata: {
      "ext": "glb",
      "mimeType": "model/gltf-binary",
      "vertices": 10327,
      "triangles": 18176,
      "rpmAvatarGender": "masculine",
      "numberOfTextures": 3,
      "totalTextureSize": 1.88,
      "isRPM": true,
    }
  },
  389: {
    id: 389,
    name: "Books.zip",
    file_paths: {
      "o": "o/Books.zip",
      "t": "t/Books.jpeg",
      "gltf": "gltf/scene.gltf"
    },
    file_urls: {
      "o": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/543d8a86-60e2-49a0-98ab-b40299ab6ea6/o/Books.zip",
      "t": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/543d8a86-60e2-49a0-98ab-b40299ab6ea6/t/Books.jpeg",
      "gltf": "https://u.vrgmetri.com/gb-sms-dev/media/2022-12/gmetri/543d8a86-60e2-49a0-98ab-b40299ab6ea6/gltf/scene.gltf"
    },
    size: 1073720,
    type: pathUtils.FileType.THREED,
    metadata: {
      "ext": "zip",
      "mimeType": "application/zip",
      "vertices": 2033,
      "triangles": 2485,
      "numOfFiles": 5,
      "numberOfTextures": 2,
      "totalTextureSize": 0.99
    }
  }
}

describe ("r ProjectFactory tests", () => {
  it ("should add element record to a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const idAndRecord = projectF.addElementRecord({ parentIdOrAddress: 1684926140314, elementType: ElementType.character });
    expect(idAndRecord).to.not.be.undefined;
    const record = projectF.getDeepRecord(idAndRecord?.id as number);
    expect(record).to.not.be.undefined;
    expect(record?.props.element_type).to.be.equal(ElementType.character);
    expect(record?.name).to.be.equal(elementDisplayNames[ElementType.character]);
  });

  it ("should add record to a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    //Note: Adding an element like this, and not specifying its props.element_type, will cause it to be rejected by ElementRecord
    const idAndRecord = projectF.addRecord({ record: createRecord(RT.element), parentIdOrAddress: 1684926516892 });
    expect(idAndRecord).to.not.be.undefined;
    expect(projectF.getDeepRecord(idAndRecord?.id as number)).to.not.be.undefined;
  });

  it ("should delete scene record from a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    projectF.deleteRecord(1684926787722);
    const scene = projectF.getRecord(1684926787722, RT.scene);
    expect(scene).to.be.undefined;
    const tourModeRecord = projectF.getRecord(2515056474854200, RT.tour_mode);
    expect(tourModeRecord).to.be.undefined;
    const menuRecord = projectF.getRecord(8591652930428468, RT.menu);
    expect(menuRecord).to.be.undefined;
  });

  it ("should delete lead gen record from a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    projectF.deleteRecord(5755181695918337);
    expect(projectF.getRecord(5755181695918337, RT.lead_gen_field)).to.be.undefined;
    expect(projectF.getRecord(7578584700093195, RT.variable)).to.be.undefined;
  });

  it ("should delete element from project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    projectF.deleteDeepRecord(5640688583895573);
    expect(projectF.getDeepRecord(5640688583895573)).to.be.undefined;
  });

  it ("should change record name for a scene in a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const updatedName = "Updated Name for test";
    projectF.changeRecordName(1684926140314, updatedName);
    expect(projectF.getRecord(1684926140314, RT.scene)?.name).to.be.equal(updatedName);
  });

  it ("should change record name for a lead gen field in a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const updatedName = "Updated Name for lead gen test";
    projectF.changeRecordName(8486422448379481, updatedName);
    expect(projectF.getRecord(8486422448379481, RT.lead_gen_field)?.name).to.be.equal(updatedName);
    expect(projectF.getRecord(5881574250644182, RT.variable)?.name).to.be.equal(`${updatedName}_var`);
  });

  it ("should change record name for a variable in a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const updatedName = "variable_name_update_test";
    projectF.changeRecordName(7469457607607874, updatedName);
    expect(projectF.getRecord(7469457607607874, RT.variable)?.name).to.be.equal(updatedName);

    const variableIdAndRecord = projectF.getIdAndRecord(7469457607607874);
    if (!variableIdAndRecord) return;
    projectF.TEST_CASE_updateRecordsLinkedToVariableTemplate(variableIdAndRecord, "string_var");
    const record = projectF.getDeepRecord(8720042838001644);
    expect(record?.props.text).to.be.equal("{{variable_name_update_test}}");
  });

  it ("should change record name for an element in a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const updatedName = "Updated Name for element test";
    projectF.changeRecordName(9977847668094658, updatedName);
    expect(projectF.getDeepRecord(9977847668094658)?.name).to.be.equal(updatedName);
  });

  it ("should update string template in record for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const record = projectF.getDeepRecord(8720042838001644);
    projectF.TEST_CASE_updateStringTemplateInRecord(record as RecordNode<RT>, "string_var", "string_var3");
    expect(record?.props.text).to.be.equal("{{string_var3}}");
  });

  it ("should add variable of type for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const variableIdAndRecord = projectF.addVariableOfType(VariableType.boolean);
    expect(variableIdAndRecord?.record).to.not.be.undefined;
    expect(variableIdAndRecord?.record.props.var_type).to.be.equal(VariableType.boolean);
  });

  it ("should add pre defined variables for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const variableIdAndRecord = projectF.addPredefinedVariable(PredefinedVariableName.scorm_suspend_data);
    expect(variableIdAndRecord?.record).to.not.be.undefined;
    expect(variableIdAndRecord?.record.name).to.be.equal("scorm_suspend_data");
  });

  it ("should add global variables for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const variable = createRecord(RT.variable);
    const id = generateIdV2();
    const variableIdAndRecord = projectF.addGlobalVariable(variable, id);
    expect(variableIdAndRecord?.id).to.be.equal(id);
    expect(variableIdAndRecord?.record).to.not.be.undefined;
    expect(variableIdAndRecord?.record.props.var_category).to.be.equal("global");
  });

  it ("should update global variable properties for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    projectF.updateGlobalVariableProperties(gvsMap);
    const variableRecordMap = projectF.getRecordMap(RT.variable);
    for (const id in variableRecordMap) {
      const variable = variableRecordMap[id];
      if (variable.props.var_category === VarCategory.global) {
        expect(variable.props.var_default).to.be.equal(gvsMap[id].props.var_default);
        expect(variable.name).to.be.equal(gvsMap[id].name);
      }
    }
  });

  it ("should get initial scene id for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const initialSceneId = projectF.getInitialSceneId();
    expect(initialSceneId).to.be.equal(1684926516892);
  });

  it ("should get project thumbnail for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const projectThumbnail = projectF.getProjectThumbnail();
    const panoElement = projectF.getDeepRecord(7642315857910271);
    const elementF = new ElementFactory(panoElement as RecordNode<RT.element>);
    const source = elementF.getValueOrDefault(rtp.element.source) as fn.Source;
    expect(projectThumbnail).to.be.equal(source.file_urls?.t);
  });

  it ("should get file ids from project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const fileIds = projectF.getFileIdsFromProject();
    expect(fileIds.length).to.be.equal(3);
  });

  it ("should inject source element into project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    projectF.injectSourceIntoProject(sourceMap);
    const image = projectF.getDeepRecord(1366836342601946);
    const source = new ElementFactory(image as RecordNode<RT.element>).getValueOrDefault(rtp.element.source) as fn.Source;
    expect(source.file_urls?.o).to.be.equal(sourceMap[230739].file_urls.o);
    expect(source.file_urls?.t).to.be.equal(sourceMap[230739].file_urls.t);
  });

  it ("should get metadata for a project", () => {
    const projectF = new ProjectFactory(deepClone(manishJson));
    fs.writeFileSync("./test/r/jsons/r3fJsons/metadata/metadata.json", JSON.stringify(projectF.getMetadata()));
  });

  xit ("should copy to clipboard for a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const clipboard = projectF.copyToClipboard([ 1684926140314, 5364265808415932, 7099775484488106 ]);
    fs.writeFileSync("./test/r/jsons/r3fJsons/clipboard/project.json", JSON.stringify(clipboard));
  });

  xit ("should paste from clipboard to project", () => {
    const projectF = new ProjectFactory(createRecord(RT.project));
    projectF.pasteFromClipboard("", clipboardData as ClipboardData);
    fs.writeFileSync("./test/r/jsons/r3fJsons/clipboard/pasted.json", JSON.stringify(deepClone(threeScenesJson)));
  });

  it ("should not delete last scene from a project", () => {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const sceneIds = projectF.getRecordIds(RT.scene);
    projectF.deleteRecord(sceneIds[0], RT.scene);
    projectF.deleteRecord(sceneIds[1], RT.scene);
    projectF.deleteRecord(sceneIds[2], RT.scene);
    const sceneIdsRemaining = projectF.getRecordIds(RT.scene);
    expect(sceneIdsRemaining.length).to.be.equal(1);
    expect(sceneIdsRemaining[0]).to.be.equal(sceneIds[2]);
  });

  it ("should reorder upon reaching dangerous exponential value", function () {
    this.timeout(30000);
    const projectF = new RecordFactory(deepClone(threeScenesJson));
    for (let i = 0; i < 1080; i++) { //at 1081 it reorders
      const scene = createRecord(RT.scene);
      projectF.addRecord({ record: scene, position: 1 });
    }

    const sortedRecords = projectF.getSortedRecordEntries(RT.scene);

    for (let i = 0; i < 200; i++) {
      console.log("[id, order]:", sortedRecords[i][0], String(sortedRecords[i][1].order));
    }
  });

  it ("should not update ta_properties when a variable is added", function () {
    const projectF = new ProjectFactory(deepClone(threeScenesJson));
    const variable = createRecord(RT.variable);
    projectF.addRecord({ record: variable });

    const rulesAfterAdding = projectF.getDeepRecordEntries(RT.then_action);
    for (const rule of rulesAfterAdding) {
      expect(rule[1].props.ta_properties).to.be.undefined;
    }
  });

  it ("should get all file ids from project json", () => {
    const projectF = new ProjectFactory(deepClone(projectJson));
    const idAndRecord1 = projectF.addBlankRecord({ type: RT.avatar });
    const idAndRecord2 = projectF.addBlankRecord({ type: RT.avatar });
    const idAndRecord3 = projectF.addBlankRecord({ type: RT.avatar });

    idAndRecord1 && new RecordFactory(idAndRecord1.record).set(rtp.avatar.source, { id: 3769 });
    idAndRecord2 && new RecordFactory(idAndRecord2.record).set(rtp.avatar.source, { id: 3262 });
    idAndRecord3 && new RecordFactory(idAndRecord3.record).set(rtp.avatar.source, { id: 389 });

    const fileIds = projectF.getFileIdsFromProject();
    expect(fileIds).to.include(3769);
    expect(fileIds).to.include(3262);
    expect(fileIds).to.include(389);
  });

  xit ("should inject source for avatars", () => {
    const project = deepClone(projectJson);
    // @ts-ignore
    const projectF = new ProjectFactory(project);
    const idAndRecord1 = projectF.addBlankRecord({ type: RT.avatar });
    const idAndRecord2 = projectF.addBlankRecord({ type: RT.avatar });
    const idAndRecord3 = projectF.addBlankRecord({ type: RT.avatar });

    idAndRecord1 && new RecordFactory(idAndRecord1.record).set(rtp.avatar.source, { id: 3769 });
    idAndRecord2 && new RecordFactory(idAndRecord2.record).set(rtp.avatar.source, { id: 3262 });
    idAndRecord3 && new RecordFactory(idAndRecord3.record).set(rtp.avatar.source, { id: 389 });

    projectF.injectSourceIntoProject(avatarSourceMap);
    fs.writeFileSync("./test/r/jsons/r3fJsons/project/project.json", JSON.stringify(project));
  });
});