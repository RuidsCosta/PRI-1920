<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="pr">
        <head>
            <title> <xsl:value-of select="./meta/title"/> </title>
            <meta charset="UTF-8"/>
        </head>
    
        <body>
            <h1><xsl:value-of select="./meta/title"/></h1>
            <h2><xsl:value-of select="./meta/subtitle"/></h2>
            <table>
                <tr>
                    <th>Begin Date</th>
                    <td><xsl:value-of select="./meta/bdate"/></td>
                </tr>
                <tr>
                    <th>End Date</th>
                    <td><xsl:value-of select="./meta/edate"/></td>
                </tr>
            </table>
            <p>
                <strong> Supervisor: </strong>
                <a>
                    <xsl:value-of select="supervisor/name"/>
                    <xsl:value-of select="supervisor/email"/>
                </a>
                <a href="supervisor/homepage"> Supervisor's WebPage</a>
            </p>
            
            <hr/>
            
            <h3>Team</h3>
            
            <ul>
                <table>
                    <xsl:for-each select="workteam/member">
                        <li>
                            
                            <tr>
                                <th>ID:</th>
                                <td><xsl:value-of select="member/identifier"/></td>
                            </tr>
                            <tr>
                                <th>Name:</th>
                                <td><xsl:value-of select="member/name"/></td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td><xsl:value-of select="member/email"/></td>
                            </tr>
                            
                        </li>
                        
                    </xsl:for-each>
                </table>
                
            </ul>

            <hr>
                <h4> Abstract </h4>
                <xsl:for-each select="./abstract/p">
                    <p> <xsl:value-of select="."/></p>
                </xsl:for-each>
                
            </hr>
            
            <h4>Deliverables</h4>
            
            <ul>
                <xsl:for-each select="./deliverables/deliverable">
                    <li>
                        <a>
                            <xsl:attribute name="href"><xsl:value-of select="./@path"/></xsl:attribute>
                            <xsl:value-of select="."/>
                        </a>
                    </li>
                </xsl:for-each>
            </ul>
            
        </body>
    </xsl:template>
    
    
    
    
</xsl:stylesheet>