export const parseBBCodeToHtml = (text: string): string => {
  if (!text) return "";

  // Remove the zero-width space characters Bubble sometimes inserts like ∩╗┐ or similar
  let html = text.replace(/∩╗┐/g, "").replace(/\r/g, "");

  // Replace bbcode with html
  html = html
    .replace(/\[h([1-6])\](.*?)\[\/h\1\]/gis, "<h$1>$2</h$1>")
    .replace(/\[b\](.*?)\[\/b\]/gis, "<strong>$1</strong>")
    .replace(/\[i\](.*?)\[\/i\]/gis, "<em>$1</em>")
    .replace(/\[u\](.*?)\[\/u\]/gis, "<u>$1</u>")
    .replace(/\[url="(.*?)"\](.*?)\[\/url\]/gis, "<a href='$1' target='_blank' rel='noopener noreferrer'>$2</a>")
    .replace(/\[url=(.*?)\](.*?)\[\/url\]/gis, "<a href='$1' target='_blank' rel='noopener noreferrer'>$2</a>")
    .replace(/\[img\](.*?)\[\/img\]/gis, "<img src='$1' alt='Image' className='w-full rounded-xl my-4' />")
    .replace(/\[font="*([^\]"]*?)"*\](.*?)\[\/font\]/gis, "<span style='font-family: \"$1\", sans-serif'>$2</span>")
    .replace(/\[color="*([^\]"]*?)"*\](.*?)\[\/color\]/gis, "<span style='color: $1'>$2</span>")
    .replace(/\[size="*([^\]"]*?)"*\](.*?)\[\/size\]/gis, "<span style='font-size: $1px'>$2</span>")
    .replace(/\[ml\]/gi, "<div className='ml-4'>")
    .replace(/\[\/ml\]/gi, "</div>")
    .replace(/\[ul\](.*?)\[\/ul\]/gis, "<ul>$1</ul>")
    .replace(/\[ol\](.*?)\[\/ol\]/gis, "<ol>$1</ol>")
    .replace(/\[li[^\]]*\](.*?)\[\/li\]/gis, "<li>$1</li>")
    .replace(/\[left\](.*?)\[\/left\]/gis, "<div style='text-align: left'>$1</div>")
    .replace(/\[center\](.*?)\[\/center\]/gis, "<div style='text-align: center'>$1</div>")
    .replace(/\[right\](.*?)\[\/right\]/gis, "<div style='text-align: right'>$1</div>");

  // Normalize duplicate line breaks
  html = html.replace(/\n{2,}/g, "\n\n");
  
  // Wrap text chunks in paragraphs and preserve block elements
  let blocks = html.split('\n\n');
  blocks = blocks.map(block => {
    block = block.trim();
    if (!block) return '';
    
    // Check if block starts with a block-level HTML element
    if (/^<(h[1-6]|ul|ol|li|div|img|table|blockquote)[> ]/i.test(block)) {
       // For lists, we don't want `<br />` at the end of `<li>` items
       if (!/^<(ul|ol|table)/i.test(block)) {
          return block.replace(/\n/g, "<br />");
       }
       return block; 
    }
    
    // Plain text or inline elements get wrapped in <p>
    return `<p>${block.replace(/\n/g, "<br />")}</p>`;
  });

  return blocks.filter(b => b.length > 0).join('\n\n');
};
