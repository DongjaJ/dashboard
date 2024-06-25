//
// Copyright 2022 The Yorkie Authors. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.10.0 with parameter "target=js+dts,js_import_style=module"
// @generated from file src/api/yorkie/v1/resources.proto (package yorkie.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3, StringValue, Timestamp } from "@bufbuild/protobuf";

/**
 * @generated from enum yorkie.v1.ValueType
 */
export const ValueType = /*@__PURE__*/ proto3.makeEnum(
  "yorkie.v1.ValueType",
  [
    {no: 0, name: "VALUE_TYPE_NULL", localName: "NULL"},
    {no: 1, name: "VALUE_TYPE_BOOLEAN", localName: "BOOLEAN"},
    {no: 2, name: "VALUE_TYPE_INTEGER", localName: "INTEGER"},
    {no: 3, name: "VALUE_TYPE_LONG", localName: "LONG"},
    {no: 4, name: "VALUE_TYPE_DOUBLE", localName: "DOUBLE"},
    {no: 5, name: "VALUE_TYPE_STRING", localName: "STRING"},
    {no: 6, name: "VALUE_TYPE_BYTES", localName: "BYTES"},
    {no: 7, name: "VALUE_TYPE_DATE", localName: "DATE"},
    {no: 8, name: "VALUE_TYPE_JSON_OBJECT", localName: "JSON_OBJECT"},
    {no: 9, name: "VALUE_TYPE_JSON_ARRAY", localName: "JSON_ARRAY"},
    {no: 10, name: "VALUE_TYPE_TEXT", localName: "TEXT"},
    {no: 11, name: "VALUE_TYPE_INTEGER_CNT", localName: "INTEGER_CNT"},
    {no: 12, name: "VALUE_TYPE_LONG_CNT", localName: "LONG_CNT"},
    {no: 13, name: "VALUE_TYPE_TREE", localName: "TREE"},
  ],
);

/**
 * @generated from enum yorkie.v1.DocEventType
 */
export const DocEventType = /*@__PURE__*/ proto3.makeEnum(
  "yorkie.v1.DocEventType",
  [
    {no: 0, name: "DOC_EVENT_TYPE_DOCUMENT_CHANGED", localName: "DOCUMENT_CHANGED"},
    {no: 1, name: "DOC_EVENT_TYPE_DOCUMENT_WATCHED", localName: "DOCUMENT_WATCHED"},
    {no: 2, name: "DOC_EVENT_TYPE_DOCUMENT_UNWATCHED", localName: "DOCUMENT_UNWATCHED"},
    {no: 3, name: "DOC_EVENT_TYPE_DOCUMENT_BROADCAST", localName: "DOCUMENT_BROADCAST"},
  ],
);

/**
 * ///////////////////////////////////////
 * Messages for Snapshot               //
 * ///////////////////////////////////////
 *
 * @generated from message yorkie.v1.Snapshot
 */
export const Snapshot = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Snapshot",
  () => [
    { no: 1, name: "root", kind: "message", T: JSONElement },
    { no: 2, name: "presences", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: Presence} },
  ],
);

/**
 * ChangePack is a message that contains all changes that occurred in a document.
 * It is used to synchronize changes between clients and servers.
 *
 * @generated from message yorkie.v1.ChangePack
 */
export const ChangePack = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.ChangePack",
  () => [
    { no: 1, name: "document_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "checkpoint", kind: "message", T: Checkpoint },
    { no: 3, name: "snapshot", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 4, name: "changes", kind: "message", T: Change, repeated: true },
    { no: 5, name: "min_synced_ticket", kind: "message", T: TimeTicket },
    { no: 6, name: "is_removed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message yorkie.v1.Change
 */
export const Change = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Change",
  () => [
    { no: 1, name: "id", kind: "message", T: ChangeID },
    { no: 2, name: "message", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "operations", kind: "message", T: Operation, repeated: true },
    { no: 4, name: "presence_change", kind: "message", T: PresenceChange },
  ],
);

/**
 * @generated from message yorkie.v1.ChangeID
 */
export const ChangeID = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.ChangeID",
  () => [
    { no: 1, name: "client_seq", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 2, name: "server_seq", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 3, name: "lamport", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 4, name: "actor_id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message yorkie.v1.Operation
 */
export const Operation = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation",
  () => [
    { no: 1, name: "set", kind: "message", T: Operation_Set, oneof: "body" },
    { no: 2, name: "add", kind: "message", T: Operation_Add, oneof: "body" },
    { no: 3, name: "move", kind: "message", T: Operation_Move, oneof: "body" },
    { no: 4, name: "remove", kind: "message", T: Operation_Remove, oneof: "body" },
    { no: 5, name: "edit", kind: "message", T: Operation_Edit, oneof: "body" },
    { no: 6, name: "select", kind: "message", T: Operation_Select, oneof: "body" },
    { no: 7, name: "style", kind: "message", T: Operation_Style, oneof: "body" },
    { no: 8, name: "increase", kind: "message", T: Operation_Increase, oneof: "body" },
    { no: 9, name: "tree_edit", kind: "message", T: Operation_TreeEdit, oneof: "body" },
    { no: 10, name: "tree_style", kind: "message", T: Operation_TreeStyle, oneof: "body" },
  ],
);

/**
 * @generated from message yorkie.v1.Operation.Set
 */
export const Operation_Set = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Set",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "message", T: JSONElementSimple },
    { no: 4, name: "executed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "Operation_Set"},
);

/**
 * @generated from message yorkie.v1.Operation.Add
 */
export const Operation_Add = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Add",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "prev_created_at", kind: "message", T: TimeTicket },
    { no: 3, name: "value", kind: "message", T: JSONElementSimple },
    { no: 4, name: "executed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "Operation_Add"},
);

/**
 * @generated from message yorkie.v1.Operation.Move
 */
export const Operation_Move = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Move",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "prev_created_at", kind: "message", T: TimeTicket },
    { no: 3, name: "created_at", kind: "message", T: TimeTicket },
    { no: 4, name: "executed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "Operation_Move"},
);

/**
 * @generated from message yorkie.v1.Operation.Remove
 */
export const Operation_Remove = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Remove",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "created_at", kind: "message", T: TimeTicket },
    { no: 3, name: "executed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "Operation_Remove"},
);

/**
 * @generated from message yorkie.v1.Operation.Edit
 */
export const Operation_Edit = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Edit",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "from", kind: "message", T: TextNodePos },
    { no: 3, name: "to", kind: "message", T: TextNodePos },
    { no: 4, name: "created_at_map_by_actor", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: TimeTicket} },
    { no: 5, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "executed_at", kind: "message", T: TimeTicket },
    { no: 7, name: "attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
  {localName: "Operation_Edit"},
);

/**
 * NOTE(hackerwins): Select Operation is not used in the current version.
 * In the previous version, it was used to represent selection of Text.
 * However, it has been replaced by Presence now. It is retained for backward
 * compatibility purposes.
 *
 * @generated from message yorkie.v1.Operation.Select
 */
export const Operation_Select = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Select",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "from", kind: "message", T: TextNodePos },
    { no: 3, name: "to", kind: "message", T: TextNodePos },
    { no: 4, name: "executed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "Operation_Select"},
);

/**
 * @generated from message yorkie.v1.Operation.Style
 */
export const Operation_Style = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Style",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "from", kind: "message", T: TextNodePos },
    { no: 3, name: "to", kind: "message", T: TextNodePos },
    { no: 4, name: "attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 5, name: "executed_at", kind: "message", T: TimeTicket },
    { no: 6, name: "created_at_map_by_actor", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: TimeTicket} },
  ],
  {localName: "Operation_Style"},
);

/**
 * @generated from message yorkie.v1.Operation.Increase
 */
export const Operation_Increase = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.Increase",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "value", kind: "message", T: JSONElementSimple },
    { no: 3, name: "executed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "Operation_Increase"},
);

/**
 * @generated from message yorkie.v1.Operation.TreeEdit
 */
export const Operation_TreeEdit = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.TreeEdit",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "from", kind: "message", T: TreePos },
    { no: 3, name: "to", kind: "message", T: TreePos },
    { no: 4, name: "created_at_map_by_actor", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: TimeTicket} },
    { no: 5, name: "contents", kind: "message", T: TreeNodes, repeated: true },
    { no: 7, name: "split_level", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 6, name: "executed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "Operation_TreeEdit"},
);

/**
 * @generated from message yorkie.v1.Operation.TreeStyle
 */
export const Operation_TreeStyle = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Operation.TreeStyle",
  () => [
    { no: 1, name: "parent_created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "from", kind: "message", T: TreePos },
    { no: 3, name: "to", kind: "message", T: TreePos },
    { no: 4, name: "attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
    { no: 5, name: "executed_at", kind: "message", T: TimeTicket },
    { no: 6, name: "attributes_to_remove", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "created_at_map_by_actor", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: TimeTicket} },
  ],
  {localName: "Operation_TreeStyle"},
);

/**
 * @generated from message yorkie.v1.JSONElementSimple
 */
export const JSONElementSimple = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElementSimple",
  () => [
    { no: 1, name: "created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "moved_at", kind: "message", T: TimeTicket },
    { no: 3, name: "removed_at", kind: "message", T: TimeTicket },
    { no: 4, name: "type", kind: "enum", T: proto3.getEnumType(ValueType) },
    { no: 5, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message yorkie.v1.JSONElement
 */
export const JSONElement = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElement",
  () => [
    { no: 1, name: "json_object", kind: "message", T: JSONElement_JSONObject, oneof: "body" },
    { no: 2, name: "json_array", kind: "message", T: JSONElement_JSONArray, oneof: "body" },
    { no: 3, name: "primitive", kind: "message", T: JSONElement_Primitive, oneof: "body" },
    { no: 5, name: "text", kind: "message", T: JSONElement_Text, oneof: "body" },
    { no: 6, name: "counter", kind: "message", T: JSONElement_Counter, oneof: "body" },
    { no: 7, name: "tree", kind: "message", T: JSONElement_Tree, oneof: "body" },
  ],
);

/**
 * @generated from message yorkie.v1.JSONElement.JSONObject
 */
export const JSONElement_JSONObject = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElement.JSONObject",
  () => [
    { no: 1, name: "nodes", kind: "message", T: RHTNode, repeated: true },
    { no: 2, name: "created_at", kind: "message", T: TimeTicket },
    { no: 3, name: "moved_at", kind: "message", T: TimeTicket },
    { no: 4, name: "removed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "JSONElement_JSONObject"},
);

/**
 * @generated from message yorkie.v1.JSONElement.JSONArray
 */
export const JSONElement_JSONArray = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElement.JSONArray",
  () => [
    { no: 1, name: "nodes", kind: "message", T: RGANode, repeated: true },
    { no: 2, name: "created_at", kind: "message", T: TimeTicket },
    { no: 3, name: "moved_at", kind: "message", T: TimeTicket },
    { no: 4, name: "removed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "JSONElement_JSONArray"},
);

/**
 * @generated from message yorkie.v1.JSONElement.Primitive
 */
export const JSONElement_Primitive = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElement.Primitive",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ValueType) },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "created_at", kind: "message", T: TimeTicket },
    { no: 4, name: "moved_at", kind: "message", T: TimeTicket },
    { no: 5, name: "removed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "JSONElement_Primitive"},
);

/**
 * @generated from message yorkie.v1.JSONElement.Text
 */
export const JSONElement_Text = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElement.Text",
  () => [
    { no: 1, name: "nodes", kind: "message", T: TextNode, repeated: true },
    { no: 2, name: "created_at", kind: "message", T: TimeTicket },
    { no: 3, name: "moved_at", kind: "message", T: TimeTicket },
    { no: 4, name: "removed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "JSONElement_Text"},
);

/**
 * @generated from message yorkie.v1.JSONElement.Counter
 */
export const JSONElement_Counter = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElement.Counter",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(ValueType) },
    { no: 2, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "created_at", kind: "message", T: TimeTicket },
    { no: 4, name: "moved_at", kind: "message", T: TimeTicket },
    { no: 5, name: "removed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "JSONElement_Counter"},
);

/**
 * @generated from message yorkie.v1.JSONElement.Tree
 */
export const JSONElement_Tree = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.JSONElement.Tree",
  () => [
    { no: 1, name: "nodes", kind: "message", T: TreeNode, repeated: true },
    { no: 2, name: "created_at", kind: "message", T: TimeTicket },
    { no: 3, name: "moved_at", kind: "message", T: TimeTicket },
    { no: 4, name: "removed_at", kind: "message", T: TimeTicket },
  ],
  {localName: "JSONElement_Tree"},
);

/**
 * @generated from message yorkie.v1.RHTNode
 */
export const RHTNode = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.RHTNode",
  () => [
    { no: 1, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "element", kind: "message", T: JSONElement },
  ],
);

/**
 * @generated from message yorkie.v1.RGANode
 */
export const RGANode = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.RGANode",
  () => [
    { no: 1, name: "next", kind: "message", T: RGANode },
    { no: 2, name: "element", kind: "message", T: JSONElement },
  ],
);

/**
 * @generated from message yorkie.v1.NodeAttr
 */
export const NodeAttr = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.NodeAttr",
  () => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "updated_at", kind: "message", T: TimeTicket },
    { no: 3, name: "is_removed", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * @generated from message yorkie.v1.TextNode
 */
export const TextNode = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TextNode",
  () => [
    { no: 1, name: "id", kind: "message", T: TextNodeID },
    { no: 2, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "removed_at", kind: "message", T: TimeTicket },
    { no: 4, name: "ins_prev_id", kind: "message", T: TextNodeID },
    { no: 5, name: "attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: NodeAttr} },
  ],
);

/**
 * @generated from message yorkie.v1.TextNodeID
 */
export const TextNodeID = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TextNodeID",
  () => [
    { no: 1, name: "created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message yorkie.v1.TreeNode
 */
export const TreeNode = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TreeNode",
  () => [
    { no: 1, name: "id", kind: "message", T: TreeNodeID },
    { no: 2, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "removed_at", kind: "message", T: TimeTicket },
    { no: 5, name: "ins_prev_id", kind: "message", T: TreeNodeID },
    { no: 6, name: "ins_next_id", kind: "message", T: TreeNodeID },
    { no: 7, name: "depth", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 8, name: "attributes", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "message", T: NodeAttr} },
  ],
);

/**
 * @generated from message yorkie.v1.TreeNodes
 */
export const TreeNodes = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TreeNodes",
  () => [
    { no: 1, name: "content", kind: "message", T: TreeNode, repeated: true },
  ],
);

/**
 * @generated from message yorkie.v1.TreeNodeID
 */
export const TreeNodeID = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TreeNodeID",
  () => [
    { no: 1, name: "created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message yorkie.v1.TreePos
 */
export const TreePos = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TreePos",
  () => [
    { no: 1, name: "parent_id", kind: "message", T: TreeNodeID },
    { no: 2, name: "left_sibling_id", kind: "message", T: TreeNodeID },
  ],
);

/**
 * @generated from message yorkie.v1.User
 */
export const User = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.User",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "created_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message yorkie.v1.Project
 */
export const Project = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Project",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "public_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "secret_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "auth_webhook_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "auth_webhook_methods", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "client_deactivate_threshold", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "created_at", kind: "message", T: Timestamp },
    { no: 9, name: "updated_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message yorkie.v1.UpdatableProjectFields
 */
export const UpdatableProjectFields = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.UpdatableProjectFields",
  () => [
    { no: 1, name: "name", kind: "message", T: StringValue },
    { no: 2, name: "auth_webhook_url", kind: "message", T: StringValue },
    { no: 3, name: "auth_webhook_methods", kind: "message", T: UpdatableProjectFields_AuthWebhookMethods },
    { no: 4, name: "client_deactivate_threshold", kind: "message", T: StringValue },
  ],
);

/**
 * @generated from message yorkie.v1.UpdatableProjectFields.AuthWebhookMethods
 */
export const UpdatableProjectFields_AuthWebhookMethods = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.UpdatableProjectFields.AuthWebhookMethods",
  () => [
    { no: 1, name: "methods", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "UpdatableProjectFields_AuthWebhookMethods"},
);

/**
 * @generated from message yorkie.v1.DocumentSummary
 */
export const DocumentSummary = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.DocumentSummary",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "snapshot", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "created_at", kind: "message", T: Timestamp },
    { no: 5, name: "accessed_at", kind: "message", T: Timestamp },
    { no: 6, name: "updated_at", kind: "message", T: Timestamp },
  ],
);

/**
 * @generated from message yorkie.v1.PresenceChange
 */
export const PresenceChange = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.PresenceChange",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(PresenceChange_ChangeType) },
    { no: 2, name: "presence", kind: "message", T: Presence },
  ],
);

/**
 * @generated from enum yorkie.v1.PresenceChange.ChangeType
 */
export const PresenceChange_ChangeType = /*@__PURE__*/ proto3.makeEnum(
  "yorkie.v1.PresenceChange.ChangeType",
  [
    {no: 0, name: "CHANGE_TYPE_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "CHANGE_TYPE_PUT", localName: "PUT"},
    {no: 2, name: "CHANGE_TYPE_DELETE", localName: "DELETE"},
    {no: 3, name: "CHANGE_TYPE_CLEAR", localName: "CLEAR"},
  ],
);

/**
 * @generated from message yorkie.v1.Presence
 */
export const Presence = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Presence",
  () => [
    { no: 1, name: "data", kind: "map", K: 9 /* ScalarType.STRING */, V: {kind: "scalar", T: 9 /* ScalarType.STRING */} },
  ],
);

/**
 * @generated from message yorkie.v1.Checkpoint
 */
export const Checkpoint = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.Checkpoint",
  () => [
    { no: 1, name: "server_seq", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "client_seq", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ],
);

/**
 * @generated from message yorkie.v1.TextNodePos
 */
export const TextNodePos = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TextNodePos",
  () => [
    { no: 1, name: "created_at", kind: "message", T: TimeTicket },
    { no: 2, name: "offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "relative_offset", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

/**
 * @generated from message yorkie.v1.TimeTicket
 */
export const TimeTicket = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.TimeTicket",
  () => [
    { no: 1, name: "lamport", kind: "scalar", T: 3 /* ScalarType.INT64 */, L: 1 /* LongType.STRING */ },
    { no: 2, name: "delimiter", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "actor_id", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message yorkie.v1.DocEventBody
 */
export const DocEventBody = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.DocEventBody",
  () => [
    { no: 1, name: "topic", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "payload", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * @generated from message yorkie.v1.DocEvent
 */
export const DocEvent = /*@__PURE__*/ proto3.makeMessageType(
  "yorkie.v1.DocEvent",
  () => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(DocEventType) },
    { no: 2, name: "publisher", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "body", kind: "message", T: DocEventBody },
  ],
);

