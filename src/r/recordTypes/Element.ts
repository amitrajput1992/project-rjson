import { FileType } from "../definitions/files/index.js";
import { CharacterBrainType } from "../definitions/elements/ElementTypes.js";

export enum ElementProperty {
  element_type = "element_type",
  internal = "internal", //Not user facing, used for element specific internals. Is part of eProps so it gets handled in toJSON and fromJSON
  placer_3d = "placer_3d",
  pano_pitch_correction = "pano_pitch_correction",
  pano_yaw_correction = "pano_yaw_correction",
  wh = "wh",
  whd = "whd",
  scale = "scale",
  loop = "loop",
  autoplay = "autoplay",
  source = "source",
  volume = "volume",
  hidden = "hidden",
  locked = "locked",
  stereo = "stereo",
  opacity = "opacity",
  auto_animation = "auto_animation",
  object3d_animations = "object3d_animations",
  text = "text",
  timer_duration = "timer_duration",
  timer_mode_countdown = "timer_mode_countdown",
  font_bold = "font_bold",
  font_size = "font_size",
  font_color = "font_color",
  pano_radius = "pano_radius",
  audio_type = "audio_type",
  color = "color",
  pivot_point = "pivot_point",
  sides = "sides",
  radius = "radius",
  arc = "arc",
  height = "height",
  wireframe = "wireframe",
  inner_radius = "inner_radius",
  outer_radius = "outer_radius",
  auto_rotate = "auto_rotate",
  icon_type = "icon_type",
  icon_family = "icon_family",
  icon_name = "icon_name",
  icon_id = "icon_id",
  qr_match_strings = "qr_match_strings",
  muted = "muted",
  actionbar_elements = "actionbar_elements",
  actionbar_position = "actionbar_position",
  actionbar_size = "actionbar_size",
  actionbar_head = "actionbar_head",
  animation = "animation",
  ssml = "ssml",
  ssml_lang = "ssml_lang",
  ssml_voice = "ssml_voice",
  ssml_speed = "ssml_speed",
  ssml_pitch = "ssml_pitch",
  quiz_starting_instructions = "quiz_starting_instructions",
  quiz_passing_score = "quiz_passing_score",
  quiz_correct_score = "quiz_correct_score",
  quiz_wrong_score = "quiz_wrong_score",
  wayfinder_size = "wayfinder_size",
  placeholder_text = "placeholder_text",
  description = "description",
  price = "price",
  price_color = "price_color",
  show_add_to_cart_button = "show_add_to_cart_button",
  show_share_button = "show_share_button",
  add_to_cart_button_text = "add_to_cart_button_text",
  add_to_cart_button_link = "add_to_cart_button_link",
  chroma_effect = "chroma_effect",
  chroma_color = "chroma_color",
  share_attributes = "share_attributes",
  randomize_questions = "randomize_questions",
  show_correct_answer_prompt = "show_correct_answer_prompt",
  enable_pass_fail = "enable_pass_fail",
  linked_variable_id = "linked_variable_id",
  subset_number = "subset_number",
  enable_skip = "enable_skip",
  embed_string = "embed_string",
  source_ar = "source_ar",
  embed_scorm_url = "embed_scorm_url",
  background_source = "background_source",
  capture_input_mode = "capture_input_mode",
  embed_mode = "embed_mode",
  view_mode = "view_mode",
  // id = "id", //Used in element sub items
  // name = "name", //Used in element sub items
  image_sources = "image_sources", //To be used after a new migration
  short_description = "short_description",
  threed_source = "threed_source",
  upload_methods_allowed = "upload_methods_allowed",
  min = "min",
  max = "max",
  regex = "regex",
  regex_error_msg = "regex_error_msg",
  capture_input_dropdown_options = "capture_input_dropdown_options",
  mask = "mask",
  heading = "heading",
  font_family = "font_family",
  font_weight = "font_weight",
  collapsible = "collapsible",
  light_type = "light_type",
  intensity = "intensity",
  fall_off = "fall_off",
  billboarding = "billboarding",
  target_element_id = "target_element_id",
  media_upload_var_id = "media_upload_var_id",
  media_upload_file_types = "media_upload_file_types",
  always_open = "always_open",
  // hotspot
  target_scene_id = "target_scene_id",
  variant = "variant",
  // text background
  border_radius = "border_radius",
  border_width = "border_width",
  border_color = "border_color",
  border_opacity = "border_opacity",
  background_color = "background_color",
  background_opacity = "background_opacity",
  padding = "padding",
  vertical_alignment = "vertical_alignment",
  horizontal_alignment = "horizontal_alignment",
  text_version = "text_version",
  hover_animation = "hover_animation",
  // Can be used to set starting time for video and audio
  start_time = "start_time",
  embed_scorm_score_var_id = "embed_scorm_score_var_id",
  embed_scorm_suspend_data_var_id = "embed_scorm_suspend_data_var_id",
  embed_scorm_progress_var_id = "embed_scorm_progress_var_id",
  apply_env_map = "apply_env_map",
  preload = "preload",
  env_map_intensity = "env_map_intensity",
  // Collider volume element properties
  volume_type = "volume_type",
  mouse_jump = "mouse_jump",
  visible = "visible",
  pose = "pose",
  use_proximity_optimization = "use_proximity_optimization",
  linked_element_id = "linked_element_id",
  //Runtime property
  use_html5_audio = "use_html5_audio",

  // Intelligence
  use_ai_brain = "use_ai_brain",
  character_brain_slug = "character_brain_slug",
  character_chatbot_trigger_radius = "character_chatbot_trigger_radius",
  character_chatbot_welcome_dialogue = "character_chatbot_welcome_dialogue",
  character_chatbot_welcome_dialogue_repeat = "character_chatbot_welcome_dialogue_repeat",
  character_chatbot_initial_prompt = "character_chatbot_initial_prompt",
  character_brain_type = "character_brain_type",

  // Substitute
  enable_substitutes = "enable_substitutes",
  linked_substitute_variable = "linked_substitute_variable",

  // minimap
  minimap_alignment = "minimap_alignment",
  minimap_margin = "minimap_margin",
}

export const elementPropertyDefaults: Record<ElementProperty, unknown> = {
  [ElementProperty.element_type]: "not_used",
  [ElementProperty.internal]: {},
  [ElementProperty.placer_3d]: [0, 0, -8, 0, 0, 0, 1, 1, 1], //[Tx, Ty, Tz, Rx, Ry, Rz, Sx, Sy, Sz]
  [ElementProperty.pano_pitch_correction]: 0,
  [ElementProperty.pano_yaw_correction]: 0,
  [ElementProperty.wh]: [2, 2],
  [ElementProperty.whd]: [1, 1, 1],
  [ElementProperty.scale]: 1,
  [ElementProperty.loop]: false,
  [ElementProperty.autoplay]: false,
  [ElementProperty.source]: { uri: "", id: null },
  [ElementProperty.volume]: 100,
  [ElementProperty.hidden]: false,
  [ElementProperty.locked]: false,
  [ElementProperty.stereo]: false,
  [ElementProperty.opacity]: 1,
  [ElementProperty.auto_animation]: false,
  [ElementProperty.text]: "Hello",
  [ElementProperty.timer_duration]: "01:00",
  [ElementProperty.timer_mode_countdown]: false, //if true, mode is countdown. Else, mode is stopwatch
  [ElementProperty.font_bold]: false,
  [ElementProperty.font_size]: 1,
  [ElementProperty.font_color]: "#FFF",
  [ElementProperty.pano_radius]: 900,
  [ElementProperty.audio_type]: "upload",
  [ElementProperty.color]: "#484848CC",
  [ElementProperty.pivot_point]: "center", // center|bottom|corner
  [ElementProperty.sides]: 3, // triangle
  [ElementProperty.radius]: 1,
  [ElementProperty.arc]: 360,
  [ElementProperty.inner_radius]: 0.5,
  [ElementProperty.outer_radius]: 1,
  [ElementProperty.height]: 3,
  [ElementProperty.wireframe]: false,
  [ElementProperty.auto_rotate]: false,
  [ElementProperty.object3d_animations]: [],
  [ElementProperty.icon_type]: "",
  [ElementProperty.icon_family]: "",
  [ElementProperty.icon_name]: "",
  [ElementProperty.icon_id]: "",
  [ElementProperty.qr_match_strings]: {}, // {<match_string_id | 123456>]: {match_string_id]: 123456, value]: "abc"}}
  [ElementProperty.muted]: true,
  [ElementProperty.actionbar_elements]: {},
  [ElementProperty.actionbar_position]: "bottom",
  [ElementProperty.actionbar_size]: "medium",
  [ElementProperty.actionbar_head]: "",
  [ElementProperty.animation]: {
    name: "",
    speed: 1,
  },
  [ElementProperty.ssml]: "",
  [ElementProperty.ssml_lang]: "en-US",
  [ElementProperty.ssml_voice]: "en-US-Wavenet-A",
  [ElementProperty.ssml_speed]: 1,
  [ElementProperty.ssml_pitch]: 0,
  [ElementProperty.quiz_starting_instructions]: "",
  [ElementProperty.quiz_passing_score]: 0,
  [ElementProperty.quiz_correct_score]: 0,
  [ElementProperty.quiz_wrong_score]: 0,
  [ElementProperty.wayfinder_size]: "S",
  [ElementProperty.placeholder_text]: "",
  [ElementProperty.short_description]: "",
  [ElementProperty.description]: "",
  [ElementProperty.price]: "",
  [ElementProperty.price_color]: "#484848CC",
  [ElementProperty.show_add_to_cart_button]: false,
  [ElementProperty.show_share_button]: false,
  [ElementProperty.add_to_cart_button_text]: "Add to cart",
  [ElementProperty.add_to_cart_button_link]: "#",
  [ElementProperty.chroma_effect]: false,
  [ElementProperty.chroma_color]: "#6CAF7F",
  [ElementProperty.share_attributes]: {
    instruction: "",
    url: "",
    text: "",
    platforms: ["facebook", "twitter", "linkedin"],
  },
  //[ElementProperty.media_upload_heading]: "", Changed to name
  //[ElementProperty.media_upload_description]: "", Changed to description
  // this is a string that selects what all sources from where they can take the information
  // file => take image from camera
  // camera => select file from device
  // file_camera => select file from device OR take an image from camera
  //[ElementProperty.media_upload_method]: "file", Changed to upload_methods_allowed
  [ElementProperty.randomize_questions]: false,
  [ElementProperty.enable_pass_fail]: true,
  [ElementProperty.show_correct_answer_prompt]: false,
  [ElementProperty.linked_variable_id]: undefined,
  [ElementProperty.subset_number]: 0,
  [ElementProperty.enable_skip]: false,
  [ElementProperty.embed_string]: "<p>Paste your HTML code here.</p>",
  [ElementProperty.source_ar]: { },
  [ElementProperty.embed_scorm_url]: "",
  [ElementProperty.background_source]: { },
  [ElementProperty.capture_input_mode]: "textbox",
  [ElementProperty.embed_mode]: "popup",
  [ElementProperty.view_mode]: "popup",
  [ElementProperty.image_sources]: [],
  [ElementProperty.threed_source]: {},
  [ElementProperty.upload_methods_allowed]: "",
  [ElementProperty.min]: 0,
  [ElementProperty.max]: 1000,
  [ElementProperty.regex]: "",
  [ElementProperty.regex_error_msg]: "",
  [ElementProperty.capture_input_dropdown_options]: "",
  [ElementProperty.mask]: false,
  [ElementProperty.heading]: "",
  [ElementProperty.font_family]: "Montserrat",
  [ElementProperty.font_weight]: 400,
  [ElementProperty.collapsible]: false,
  // Adding it as a string because it created a circular dependency while adding it from enum
  [ElementProperty.light_type]: "ambient",
  [ElementProperty.intensity]: 1,
  [ElementProperty.fall_off]: 10,
  [ElementProperty.billboarding]: null,
  [ElementProperty.target_element_id]: null,
  [ElementProperty.media_upload_var_id]: 3000,
  // Other comprises of just PDF while defining this property
  [ElementProperty.media_upload_file_types]: [FileType.IMAGE, FileType.VIDEO, FileType.AUDIO, FileType.COMPRESSED, FileType.GIF, FileType.OTHER],
  // hotspot
  [ElementProperty.always_open]: true,
  [ElementProperty.target_scene_id]: null,
  [ElementProperty.variant]: "design_one",
  // text background
  [ElementProperty.border_radius]: 0.2,
  [ElementProperty.border_width]: 0.02,
  [ElementProperty.border_color]: "#FFFFFF",
  [ElementProperty.border_opacity]: 1,
  [ElementProperty.background_color]: "#222222",
  [ElementProperty.background_opacity]: 0.9,
  [ElementProperty.padding]: 0,
  // https://github.com/felixmariotto/three-mesh-ui/wiki/API-documentation#list-of-attributes
  [ElementProperty.vertical_alignment]: "middle", // "top" | "middle" | "bottom"
  [ElementProperty.horizontal_alignment]: "center", // "left" | "center" | "right"
  [ElementProperty.text_version]: "v2", // v1 | v2
  [ElementProperty.hover_animation]: true,
  [ElementProperty.start_time]: 0,
  [ElementProperty.embed_scorm_score_var_id]: 0,
  [ElementProperty.embed_scorm_suspend_data_var_id]: "",
  [ElementProperty.embed_scorm_progress_var_id]: 0,
  [ElementProperty.apply_env_map]: true,
  [ElementProperty.env_map_intensity]: 1,
  [ElementProperty.preload]: false,
  // Adding it as a string because it created a circular dependency while adding it from enum
  [ElementProperty.volume_type]: "cube",
  [ElementProperty.mouse_jump]: false,
  [ElementProperty.visible]: false,
  [ElementProperty.pose]: "idle",
  [ElementProperty.use_proximity_optimization]: true,
  [ElementProperty.linked_element_id]: undefined,
  [ElementProperty.use_html5_audio]: false,
  [ElementProperty.use_ai_brain]: false,
  [ElementProperty.character_brain_slug]: undefined,
  [ElementProperty.character_chatbot_trigger_radius]: 3,
  [ElementProperty.character_chatbot_welcome_dialogue]: undefined,
  [ElementProperty.character_chatbot_welcome_dialogue_repeat]: "once", // once | always
  [ElementProperty.character_chatbot_initial_prompt]: "",
  [ElementProperty.character_brain_type]: CharacterBrainType.none,

  [ElementProperty.enable_substitutes]: false,
  [ElementProperty.linked_substitute_variable]: undefined,
  [ElementProperty.minimap_alignment]: "bottom-left",
  [ElementProperty.minimap_margin]: [80, 80],
}
