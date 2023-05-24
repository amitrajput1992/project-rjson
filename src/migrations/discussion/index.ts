import { RecordNode, RT } from "../../r/R";
import { discussionMigrationTree } from "./discussionMigration";
import initialRMigration from "./discussion-migration-commands/dc199_200_initial_migration_from_rjson_to_rjson2_structure";

const discussionMigrationVersions: number[] = Object.keys(discussionMigrationTree).map(numStr => parseInt(numStr)).sort((a, b) => (a - b));

/**
 * Applies migrations for "r" type and returns a new discussion reference
 */
export const migrateDiscussion = (discussionJson: any, uptoVersion?: number): RecordNode<RT.discussion> => {
  // Check if discussion hasn't been converted to recordNode yet
  if(discussionJson?.props?.version === undefined || discussionJson?.props?.version < 199) {
    //The following step converts the json to "r" type and makes the version number 1
    discussionJson = initialRMigration.execute(discussionJson);
  }

  const rDiscussionJson = discussionJson as RecordNode<RT.discussion>;
  let jsonVersion = rDiscussionJson?.props?.version as number ?? 0;
  if(uptoVersion === undefined) {
    uptoVersion = discussionMigrationVersions[discussionMigrationVersions.length - 1] + 1;
  }

  for(const key of discussionMigrationVersions) {
    if(jsonVersion === key && key < uptoVersion) {
      console.log(`Running r migration ${key}`);
      discussionMigrationTree[key].execute(discussionJson);
      jsonVersion = discussionJson.props.version as number;
    }
  }

  return discussionJson;
}