const NO_POSTER_URL = 'data:image/png;base64,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';
const LOGO_MAIN = `<svg version="1.1" x="0px" y="0px"
    viewBox="0 0 940 175" xml:space="preserve">
<style type="text/css">
   .st0{fill:#22A39F;}
   .st1{fill:#FFFFFF;}
</style>
<path class="st0" d="M162,175H11c-6.6,0-12-5.4-12-12V12C-1,5.4,4.4,0,11,0h151c6.6,0,12,5.4,12,12v151C174,169.6,168.6,175,162,175
   z"/>
<g>
   <path class="st1" d="M137.2,86.1L85.3,34.3h-0.4v14.1H35.4c2.8-3.7,6-7,9.6-10s7.5-5.6,11.7-7.7c4.2-2.2,8.7-3.8,13.5-5
       C75,24.6,80.1,24,85.3,24c6,0,11.7,0.7,17.1,2.2c5.4,1.5,10.4,3.6,15,6.3c4.6,2.7,8.8,5.9,12.5,9.7c3.7,3.8,6.9,8,9.5,12.6
       s4.6,9.5,6,14.9c1.4,5.3,2.1,10.8,2.1,16.5c0,5.8-0.7,11.3-2.1,16.6c-1.4,5.3-3.4,10.2-6,14.9c-2.6,4.6-5.8,8.8-9.5,12.6
       c-3.7,3.8-7.9,7-12.5,9.7c-4.6,2.7-9.6,4.8-15,6.3c-5.4,1.5-11.1,2.2-17.1,2.2c-5.3,0-10.3-0.6-15.1-1.7c-4.8-1.1-9.3-2.8-13.5-4.9
       c-4.2-2.1-8.1-4.7-11.7-7.7c-3.6-3-6.8-6.4-9.6-10.1h49.5v14.1h0.4l51.9-51.8V86.1z"/>
</g>
<g>
   <path class="st1" d="M268.1,112.9l-12-47.7v51.7c0,2.9-0.6,5-1.9,6.4c-1.3,1.4-3,2.1-5.1,2.1c-2,0-3.7-0.7-5-2.1
       c-1.3-1.4-1.9-3.6-1.9-6.5V57.6c0-3.3,0.9-5.5,2.6-6.6c1.7-1.1,4-1.7,6.9-1.7h4.7c2.8,0,4.9,0.3,6.2,0.8c1.3,0.5,2.2,1.4,2.8,2.8
       c0.6,1.3,1.3,3.5,2.1,6.5l10.9,41l10.9-41c0.8-3,1.5-5.2,2.1-6.5c0.6-1.3,1.6-2.2,2.8-2.8c1.3-0.5,3.3-0.8,6.2-0.8h4.7
       c2.9,0,5.2,0.6,6.9,1.7c1.7,1.1,2.6,3.3,2.6,6.6v59.2c0,2.9-0.6,5-1.9,6.4c-1.3,1.4-3,2.1-5.1,2.1c-2,0-3.7-0.7-5-2.1
       c-1.3-1.4-1.9-3.6-1.9-6.4V65.2l-12,47.7c-0.8,3.1-1.4,5.4-1.9,6.8c-0.5,1.4-1.4,2.8-2.7,4c-1.3,1.2-3.2,1.8-5.5,1.8
       c-1.8,0-3.3-0.4-4.5-1.1c-1.2-0.8-2.2-1.7-2.9-2.9c-0.7-1.2-1.2-2.5-1.6-4C268.9,115.9,268.5,114.4,268.1,112.9z"/>
   <path class="st1" d="M381.2,97.1c0,4.2-0.6,8-1.9,11.5c-1.3,3.5-3.2,6.5-5.6,9c-2.5,2.5-5.4,4.5-8.8,5.8c-3.4,1.3-7.2,2-11.5,2
       c-4.2,0-8-0.7-11.4-2c-3.4-1.4-6.3-3.3-8.8-5.8c-2.5-2.5-4.3-5.5-5.6-9c-1.3-3.5-1.9-7.3-1.9-11.5c0-4.2,0.6-8.1,1.9-11.6
       c1.3-3.5,3.1-6.5,5.6-9c2.4-2.5,5.3-4.4,8.8-5.7c3.4-1.3,7.2-2,11.4-2c4.2,0,8.1,0.7,11.5,2c3.4,1.4,6.4,3.3,8.8,5.8
       c2.5,2.5,4.3,5.5,5.6,9C380.5,89.1,381.2,92.9,381.2,97.1z M367.2,97.1c0-5.7-1.3-10.1-3.8-13.3c-2.5-3.2-5.9-4.7-10.1-4.7
       c-2.7,0-5.1,0.7-7.2,2.1c-2.1,1.4-3.7,3.5-4.8,6.3c-1.1,2.8-1.7,6-1.7,9.7c0,3.6,0.6,6.8,1.7,9.5c1.1,2.7,2.7,4.8,4.7,6.3
       c2.1,1.4,4.5,2.2,7.3,2.2c4.2,0,7.6-1.6,10.1-4.8C365.9,107.1,367.2,102.7,367.2,97.1z"/>
   <path class="st1" d="M400.6,77.4l11.3,31.7l12.2-33c1-2.7,1.9-4.5,2.8-5.6c0.9-1.1,2.3-1.7,4.2-1.7c1.8,0,3.3,0.6,4.5,1.8
       c1.2,1.2,1.9,2.6,1.9,4.1c0,0.6-0.1,1.3-0.3,2.1c-0.2,0.8-0.5,1.6-0.8,2.3c-0.3,0.7-0.6,1.5-1,2.5L422,114.7
       c-0.4,1-0.9,2.2-1.5,3.6c-0.6,1.5-1.3,2.7-2,3.8c-0.7,1-1.6,1.8-2.7,2.4c-1.1,0.6-2.4,0.9-3.9,0.9c-2,0-3.5-0.5-4.7-1.4
       c-1.2-0.9-2-1.9-2.6-3c-0.6-1.1-1.5-3.2-2.8-6.4l-13.3-32.8c-0.3-0.8-0.6-1.6-0.9-2.5c-0.3-0.8-0.6-1.7-0.8-2.5
       c-0.2-0.9-0.3-1.6-0.3-2.2c0-1,0.3-1.9,0.9-2.8c0.6-0.9,1.4-1.7,2.4-2.3c1-0.6,2.1-0.9,3.3-0.9c2.3,0,3.9,0.7,4.8,2
       S399.6,74.3,400.6,77.4z"/>
   <path class="st1" d="M454.5,62.2c-1.9,0-3.6-0.6-5-1.8c-1.4-1.2-2.1-2.9-2.1-5.1c0-2,0.7-3.6,2.1-4.9c1.4-1.3,3.1-1.9,4.9-1.9
       c1.8,0,3.4,0.6,4.8,1.7c1.4,1.2,2.1,2.8,2.1,5.1c0,2.1-0.7,3.8-2,5C458,61.6,456.4,62.2,454.5,62.2z M461.4,76.6v40.3
       c0,2.8-0.7,4.9-2,6.3c-1.3,1.4-3,2.1-5.1,2.1c-2,0-3.7-0.7-5-2.2c-1.3-1.5-1.9-3.6-1.9-6.3V77.1c0-2.8,0.6-4.8,1.9-6.2
       c1.3-1.4,2.9-2.1,5-2.1c2,0,3.7,0.7,5.1,2.1C460.8,72.2,461.4,74.2,461.4,76.6z"/>
   <path class="st1" d="M514.7,100.5h-27.3c0,3.2,0.7,6,1.9,8.4c1.2,2.4,2.9,4.2,5,5.5c2.1,1.2,4.3,1.8,6.8,1.8c1.7,0,3.2-0.2,4.6-0.6
       c1.4-0.4,2.7-1,4-1.8c1.3-0.8,2.5-1.7,3.6-2.7c1.1-1,2.5-2.2,4.2-3.9c0.7-0.6,1.7-0.9,3.1-0.9c1.4,0,2.6,0.4,3.5,1.2
       c0.9,0.8,1.3,1.9,1.3,3.3c0,1.3-0.5,2.7-1.5,4.4c-1,1.7-2.5,3.3-4.5,4.9c-2,1.5-4.5,2.8-7.5,3.9c-3,1-6.5,1.5-10.4,1.5
       c-9,0-15.9-2.6-20.9-7.7c-5-5.1-7.5-12-7.5-20.8c0-4.1,0.6-7.9,1.8-11.5c1.2-3.5,3-6.5,5.4-9.1c2.3-2.5,5.2-4.5,8.7-5.8
       c3.4-1.3,7.3-2,11.4-2c5.4,0,10.1,1.1,14,3.4c3.9,2.3,6.8,5.3,8.8,8.9c1.9,3.6,2.9,7.4,2.9,11.1c0,3.5-1,5.8-3,6.8
       C521.2,100,518.4,100.5,514.7,100.5z M487.5,92.6h25.3c-0.3-4.8-1.6-8.3-3.9-10.7c-2.2-2.4-5.2-3.5-8.8-3.5c-3.5,0-6.3,1.2-8.6,3.6
       C489.3,84.3,487.9,87.9,487.5,92.6z"/>
   <path class="st1" d="M622,101.7c0,4.5-1.2,8.6-3.5,12.2c-2.3,3.6-5.7,6.4-10.2,8.5c-4.5,2-9.8,3.1-16,3.1c-7.4,0-13.5-1.4-18.3-4.2
       c-3.4-2-6.2-4.7-8.3-8c-2.1-3.4-3.2-6.6-3.2-9.8c0-1.8,0.6-3.4,1.9-4.7c1.3-1.3,2.9-2,4.9-2c1.6,0,3,0.5,4.1,1.5
       c1.1,1,2.1,2.5,2.8,4.5c1,2.4,2,4.4,3.1,6c1.1,1.6,2.7,2.9,4.7,4c2,1,4.6,1.6,7.9,1.6c4.5,0,8.1-1,11-3.1c2.8-2.1,4.2-4.7,4.2-7.8
       c0-2.5-0.8-4.5-2.3-6.1c-1.5-1.5-3.5-2.7-5.9-3.5c-2.4-0.8-5.6-1.7-9.6-2.6c-5.4-1.3-9.9-2.7-13.5-4.4c-3.6-1.7-6.5-4-8.6-6.9
       c-2.1-2.9-3.2-6.5-3.2-10.9c0-4.1,1.1-7.8,3.4-11c2.2-3.2,5.5-5.7,9.8-7.4c4.3-1.7,9.3-2.6,15-2.6c4.6,0,8.6,0.6,11.9,1.7
       c3.4,1.1,6.1,2.7,8.4,4.5c2.2,1.9,3.8,3.9,4.9,5.9c1,2.1,1.5,4.1,1.5,6.1c0,1.8-0.6,3.4-1.9,4.9c-1.3,1.4-2.9,2.2-4.8,2.2
       c-1.7,0-3.1-0.4-4-1.3c-0.9-0.9-1.9-2.3-2.9-4.3c-1.4-2.8-3-5-4.9-6.6c-1.9-1.6-5-2.4-9.2-2.4c-3.9,0-7.1,0.9-9.5,2.6
       c-2.4,1.7-3.6,3.8-3.6,6.2c0,1.5,0.4,2.8,1.2,3.9c0.8,1.1,1.9,2,3.4,2.8c1.4,0.8,2.9,1.4,4.3,1.8c1.5,0.4,3.9,1.1,7.3,1.9
       c4.2,1,8,2.1,11.5,3.3c3.4,1.2,6.3,2.6,8.7,4.3c2.4,1.7,4.3,3.9,5.6,6.5C621.3,94.7,622,97.9,622,101.7z"/>
   <path class="st1" d="M672.8,100.5h-27.3c0,3.2,0.7,6,1.9,8.4c1.2,2.4,2.9,4.2,5,5.5c2.1,1.2,4.3,1.8,6.8,1.8c1.7,0,3.2-0.2,4.6-0.6
       c1.4-0.4,2.7-1,4-1.8c1.3-0.8,2.5-1.7,3.6-2.7c1.1-1,2.5-2.2,4.2-3.9c0.7-0.6,1.7-0.9,3.1-0.9c1.4,0,2.6,0.4,3.5,1.2
       c0.9,0.8,1.3,1.9,1.3,3.3c0,1.3-0.5,2.7-1.5,4.4c-1,1.7-2.5,3.3-4.5,4.9c-2,1.5-4.5,2.8-7.5,3.9c-3,1-6.5,1.5-10.4,1.5
       c-9,0-15.9-2.6-20.9-7.7c-5-5.1-7.5-12-7.5-20.8c0-4.1,0.6-7.9,1.8-11.5c1.2-3.5,3-6.5,5.4-9.1c2.3-2.5,5.2-4.5,8.7-5.8
       c3.4-1.3,7.3-2,11.4-2c5.4,0,10.1,1.1,14,3.4c3.9,2.3,6.8,5.3,8.8,8.9c1.9,3.6,2.9,7.4,2.9,11.1c0,3.5-1,5.8-3,6.8
       C679.3,100,676.4,100.5,672.8,100.5z M645.5,92.6h25.3c-0.3-4.8-1.6-8.3-3.9-10.7c-2.2-2.4-5.2-3.5-8.8-3.5c-3.5,0-6.3,1.2-8.6,3.6
       C647.3,84.3,646,87.9,645.5,92.6z"/>
   <path class="st1" d="M731.3,117.6c-3.4,2.6-6.6,4.6-9.8,5.9c-3.1,1.3-6.7,2-10.6,2c-3.6,0-6.7-0.7-9.4-2.1
       c-2.7-1.4-4.8-3.3-6.3-5.7c-1.5-2.4-2.2-5-2.2-7.9c0-3.8,1.2-7.1,3.6-9.8c2.4-2.7,5.7-4.5,10-5.4c0.9-0.2,3.1-0.7,6.6-1.4
       c3.5-0.7,6.5-1.4,9-2c2.5-0.6,5.2-1.3,8.1-2.2c-0.2-3.7-0.9-6.4-2.2-8.1c-1.3-1.7-4-2.6-8.1-2.6c-3.5,0-6.2,0.5-8,1.5
       c-1.8,1-3.3,2.5-4.6,4.4c-1.3,2-2.2,3.3-2.7,3.9c-0.5,0.6-1.7,0.9-3.4,0.9c-1.6,0-2.9-0.5-4.1-1.5c-1.1-1-1.7-2.3-1.7-3.9
       c0-2.5,0.9-4.8,2.6-7.1c1.7-2.3,4.4-4.2,8.1-5.7c3.7-1.5,8.3-2.2,13.7-2.2c6.1,0,10.9,0.7,14.5,2.2c3.5,1.4,6,3.7,7.4,6.9
       c1.4,3.1,2.2,7.3,2.2,12.5c0,3.3,0,6,0,8.3c0,2.3,0,4.8-0.1,7.6c0,2.6,0.4,5.4,1.3,8.2c0.9,2.8,1.3,4.7,1.3,5.5
       c0,1.4-0.7,2.7-2,3.9c-1.3,1.2-2.9,1.8-4.6,1.8c-1.4,0-2.8-0.7-4.2-2C734.3,122.1,732.8,120.1,731.3,117.6z M730.3,97.4
       c-2,0.7-5,1.5-8.9,2.4c-3.9,0.8-6.6,1.4-8.1,1.8c-1.5,0.4-2.9,1.2-4.3,2.3c-1.4,1.1-2,2.7-2,4.8c0,2.1,0.8,3.9,2.4,5.4
       c1.6,1.5,3.7,2.2,6.3,2.2c2.8,0,5.3-0.6,7.6-1.8c2.3-1.2,4-2.8,5.1-4.7c1.3-2.1,1.9-5.6,1.9-10.4V97.4z"/>
   <path class="st1" d="M772,105.3v11.6c0,2.8-0.7,4.9-2,6.4c-1.3,1.4-3,2.1-5.1,2.1c-2,0-3.7-0.7-5-2.1c-1.3-1.4-1.9-3.5-1.9-6.3
       V78.1c0-6.3,2.3-9.4,6.8-9.4c2.3,0,4,0.7,5,2.2c1,1.5,1.6,3.6,1.7,6.5c1.7-2.9,3.4-5,5.1-6.5c1.8-1.5,4.1-2.2,7-2.2
       c2.9,0,5.8,0.7,8.5,2.2c2.8,1.5,4.1,3.4,4.1,5.8c0,1.7-0.6,3.1-1.8,4.2c-1.2,1.1-2.4,1.7-3.8,1.7c-0.5,0-1.7-0.3-3.7-0.9
       c-2-0.6-3.7-0.9-5.2-0.9c-2,0-3.7,0.5-5,1.6c-1.3,1.1-2.3,2.7-3,4.8c-0.7,2.1-1.2,4.6-1.5,7.5C772.1,97.6,772,101.1,772,105.3z"/>
   <path class="st1" d="M851.3,108.2c0,1.7-0.5,3.6-1.6,5.6c-1,2-2.6,3.9-4.7,5.6c-2.1,1.8-4.8,3.2-8,4.3c-3.2,1.1-6.9,1.6-10.9,1.6
       c-8.6,0-15.3-2.5-20.2-7.5c-4.8-5-7.3-11.8-7.3-20.2c0-5.7,1.1-10.8,3.3-15.2c2.2-4.4,5.4-7.8,9.6-10.2s9.2-3.6,15-3.6
       c3.6,0,6.9,0.5,9.9,1.6c3,1.1,5.6,2.4,7.7,4.1c2.1,1.7,3.7,3.4,4.8,5.3c1.1,1.9,1.7,3.7,1.7,5.3c0,1.7-0.6,3.1-1.9,4.2
       c-1.2,1.2-2.7,1.7-4.5,1.7c-1.2,0-2.1-0.3-2.9-0.9c-0.8-0.6-1.6-1.6-2.6-2.9c-1.7-2.6-3.5-4.5-5.3-5.8c-1.9-1.3-4.2-1.9-7.1-1.9
       c-4.1,0-7.4,1.6-10,4.8c-2.5,3.2-3.8,7.6-3.8,13.2c0,2.6,0.3,5,1,7.2c0.6,2.2,1.6,4.1,2.8,5.6c1.2,1.5,2.7,2.7,4.4,3.5
       c1.7,0.8,3.6,1.2,5.7,1.2c2.8,0,5.2-0.6,7.2-1.9c2-1.3,3.8-3.3,5.3-5.9c0.9-1.6,1.8-2.8,2.8-3.7c1-0.9,2.2-1.3,3.6-1.3
       c1.7,0,3.1,0.6,4.2,1.9C850.7,105.3,851.3,106.7,851.3,108.2z"/>
   <path class="st1" d="M874.5,56.5v20.7c1.8-2,3.5-3.7,5.2-4.9c1.7-1.2,3.5-2.1,5.6-2.7c2-0.6,4.2-0.9,6.6-0.9c3.5,0,6.7,0.7,9.4,2.2
       c2.7,1.5,4.9,3.7,6.5,6.5c1,1.7,1.7,3.5,2,5.6c0.3,2.1,0.5,4.4,0.5,7.1v26.7c0,2.8-0.6,4.9-1.9,6.3c-1.3,1.4-3,2.1-5.1,2.1
       c-4.6,0-6.9-2.8-6.9-8.5V93.4c0-4.5-0.7-7.9-2-10.3c-1.3-2.4-3.8-3.6-7.6-3.6c-2.5,0-4.7,0.7-6.7,2.1c-2,1.4-3.5,3.3-4.5,5.8
       c-0.7,2.1-1.1,5.8-1.1,11.1v18.4c0,2.8-0.6,4.9-1.9,6.3c-1.2,1.4-3,2.2-5.2,2.2c-4.6,0-6.9-2.8-6.9-8.5V56.5c0-2.8,0.6-4.9,1.8-6.4
       c1.2-1.4,2.9-2.1,5.1-2.1c2.2,0,3.9,0.7,5.2,2.1C873.8,51.6,874.5,53.7,874.5,56.5z"/>
</g>
</svg>
`;
export {LOGO_MAIN, NO_POSTER_URL};

// 1)header with logo (that leads to the homepage)
// 2)cut movie items cards to 9 items
// 3)fix undefined bug in box office while searching for games/animes
// 4)pagination