// import InlineEditorUI from "@ckeditor/ckeditor5-editor-inline/src/inlineeditorui";
// import InlineEditorUIView from "@ckeditor/ckeditor5-editor-inline/src/inlineeditoruiview";

import InlineEditorBase from "@ckeditor/ckeditor5-editor-inline/src/inlineeditor";
import ContextBase from "@ckeditor/ckeditor5-core/src/context";
import CKEditor from "@ckeditor/ckeditor5-react";
import { useRef } from "react";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Font from "@ckeditor/ckeditor5-font/src/font";
import FontColorEditing from "@ckeditor/ckeditor5-font/src/fontcolor/fontcolorediting";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import ImageResizeButtons from "@ckeditor/ckeditor5-image/src/imageresize/imageresizebuttons";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import ListProperties from "@ckeditor/ckeditor5-list/src/listproperties";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableColumnResize from "@ckeditor/ckeditor5-table/src/tablecolumnresize";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Comments from "@ckeditor/ckeditor5-comments/src/comments";
import Mention from "@ckeditor/ckeditor5-mention/src/mention";
import WordCount from "@ckeditor/ckeditor5-word-count/src/wordcount";
import RestrictedEditingMode from "@ckeditor/ckeditor5-restricted-editing/src/restrictededitingmode";
import CloudServicesPlugin from "@ckeditor/ckeditor5-cloud-services/src/cloudservices";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import BalloonToolbar from "@ckeditor/ckeditor5-ui/src/toolbar/balloon/balloontoolbar";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed";
import GeneralHtmlSupport from "@ckeditor/ckeditor5-html-support/src/generalhtmlsupport";
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import Notification from "@ckeditor/ckeditor5-ui/src/notification/notification";

class InlineEditor extends InlineEditorBase {}

class Context extends ContextBase {}

InlineEditor.builtinPlugins = [
  Essentials,
  Heading,
  Paragraph,
  WordCount,
  HtmlEmbed,
  Font,
  FontColorEditing,
  CKFinderUploadAdapter,
  Autoformat,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  BlockQuote,
  CKFinder,
  EasyImage,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  ImageResizeButtons,
  Notification,
  Indent,
  Link,
  List,
  MediaEmbed,
  PasteFromOffice,
  Table,
  TableToolbar,
  TableProperties,
  TableCellProperties,
  TableColumnResize,
  TextTransformation,
  Comments,
  Mention,
  BalloonToolbar,
  RestrictedEditingMode,
  CloudServicesPlugin,
  ListProperties,
  GeneralHtmlSupport,
  SimpleUploadAdapter,
  Subscript,
  Superscript,
  Highlight,
];

InlineEditor.defaultConfig = {
  toolbar: {
    items: [
      "heading",
      "|",
      "bold",
      "italic",
      "underline",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "indent",
      "outdent",
      "|",
      "uploadImage",
      "toggleImageCaption",
      "blockQuote",
      "inserTTable",
      "mediaEmbed",
      "undo",
      "redo",
      "insertLibraryItem",
      "addMinitableChart",
      "inlineComment",
    ],
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
    },
  },
  language: "en",
};

InlineEditor.Context = Context;

// eslint-disable-next-line react/prop-types
export const Editor = ({ data, id }) => {
  const editorRef = useRef(null);
  return (
    <CKEditor
      id={id}
      editor={InlineEditor}
      data={data}
      onInit={(editor) => {
        editorRef.current = editor;
      }}
    />
  );
};
